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
        }
    }

})();

/*******************************/
// UI Controller
/*******************************/

const UICtrl = (function(){


    //Public methods
    return {

    }

})();

/*******************************/
// App Controller
/*******************************/

const App = (function(UICtrl, ItemCtrl){

    //Public methods
    return {
        init : function(){
            console.log('Initialize application...')
        }
    }

})(UICtrl, ItemCtrl);



// Initialize
App.init();