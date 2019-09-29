
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

    return {
        getInput: function () {
            return {
                type: document.querySelector('.add__type').value, // inc or exp
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value

            }

        }
    }

})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {


    var ctrlAddItem = function () {
        // 1. get input data
        var input = UIController.getInput();
        console.log(input);
        // 2. add item to budget contorller
        // 3. add the item to the UI
        // 4. calc budget
        // 5. display budget

    }


    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);



    document.addEventListener('keypress', function (event) {
        // console.log(event);
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();

        }
    });

})(budgetController, UIController);
var data = {
    allItems: {
        exp: [],
        inc: []
    },
    totals: {
        exp: 0,
        inc: 0
    },
    budget: 0,
    percentage: -1
};