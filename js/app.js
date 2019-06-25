// Storage Controller

/*******************************/
//Item Controller
/*******************************/

const ItemCtrl = (function(){

    // Item constructor
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data structure / State

    const data = {

        items : [
            {id : 0, name : 'Steak', calories : 1200},
            {id : 1, name : 'Cookie', calories : 400},
            {id : 2, name : 'Ice-cream', calories : 200}
        ],
        currentItem : null,
        totalCalories: 0
    }

    //Public methods
    return {
        logData : function(){
            return data;
        },

        getItems : function(){
            return data.items;
        },

        addItem : function(name, calories) {
            let ID;

            // Create ID

            if(data.items.length > 0){
                ID = data.items[data.items.length -1 ].id +1; 
            } else {
                ID = 0;
            }

            // calories to parse 
            calories = parseInt(calories);

            // Create new Item

            newItem = new Item(ID, name, calories);

            // Add to items array
            data.items.push(newItem);

            return newItem;
        }
    }

})();

/*******************************/
// UI Controller
/*******************************/

const UICtrl = (function(){

    //UI Selectors object
    const UISelector = {
        itemsList : '#item-list',
        addBtn : '.add-btn',
        itemNameInput : '#item-name',
        itemCaloriesInput : '#item-calories' 
    }

    //Public methods
    return {

        populateItemList: function(items){
            let html = '';

            items.forEach(item => {
                html += `
                <li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                  <i class="edit-item fa fa-pencil"></i>
                </a>
              </li>
                `;       

                document.querySelector(UISelector.itemsList).innerHTML = html;
            });
        },

        getInputItems: function(){
            return {
                name : document.querySelector(UISelector.itemNameInput).value,
                calories : document.querySelector(UISelector.itemCaloriesInput).value
            }
        },

        getSelectors : function(){
            return UISelector;
        }
    }

})();

/*******************************/
// App Controller
/*******************************/

const App = (function(UICtrl, ItemCtrl){

    const loadEventListeners = function(){
        // Get UI selectors
        const UISelector = UICtrl.getSelectors();
        // Add item event
        document.querySelector(UISelector.addBtn).addEventListener
        ('click', itemAddSubmit);


    }
    // Add item events
    const itemAddSubmit = function(e){

        // Get Form input from UI controller
        const input = UICtrl.getInputItems();

        // Check fro name and calories input 
        if(input.name !== '' && input.calories !== ''){

            const newItem = ItemCtrl.addItem(input.name, input.calories);
        }

        e.preventDefault();
    }


    //Public methods
    return {
        init : function(){
            // Fetch items from data structure
            const items = ItemCtrl.getItems();

            // populate list with items
            UICtrl.populateItemList(items);

            // Load event listeners
            loadEventListeners();
        }
    }

})(UICtrl, ItemCtrl);



// Initialize
App.init();