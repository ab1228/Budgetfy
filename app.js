
/// BUDGET CONTROLLER
var budgetController = (function () {
    var x = 23;

    var add = function (a) {
        return x + a;
    }

    return {
        publicTest: function (b) {
            return add(b);
        }
    }

})();

/// UI CONTORLLER
var UIController = (function () {

    // code here

})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {


    document.querySelector('.add__btn').addEventListener('click', function () {
        // 1. get input data
        // 2. add item to budget contorller
        // 3. add the item to the UI
        // 4. calc budget
        // 5. display budget

    })


    document.addEventListener('keypress', function (event) {
        console.log(event);
    });

})(budgetController, UIController);