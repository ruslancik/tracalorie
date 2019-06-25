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
        }
    }

})();

/*******************************/
// UI Controller
/*******************************/

const UICtrl = (function(){
    const UISelector = {
        itemsList : '#item-list'
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
        }
    }

})();

/*******************************/
// App Controller
/*******************************/

const App = (function(UICtrl, ItemCtrl){

    //Public methods
    return {
        init : function(){
            // Fetch items from data structure
            const items = ItemCtrl.getItems();

            // populate list with items
            UICtrl.populateItemList(items);
        }
    }

})(UICtrl, ItemCtrl);



// Initialize
App.init();