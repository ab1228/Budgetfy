
/// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var allExpenses = [];
    var allIncome = [];

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }

    }

})();


/// UI CONTORLLER
var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value

            };

        },

        getDOMstrings: function () {
            return DOMstrings;
        }

    };

})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListener = function () {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            // console.log(event);
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();

            }
        });
    }



    var ctrlAddItem = function () {
        // 1. get input data
        var input = UIController.getInput();

        // 2. add item to budget contorller
        // 3. add the item to the UI
        // 4. calc budget
        // 5. display budget

    };
    return {
        init: function () {
            console.log('test app has started');
            setupEventListener();
        }
    };


})(budgetController, UIController);

controller.init();
