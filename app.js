// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    }
})

Expense.prototype.calcPercentage = function (totalIncome) {
    if (totalIncome > 0) {
        this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
        this.percentage = -1;
    }
};