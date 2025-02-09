// "Task 1 - Business Profit Calculation."
function calculateProfit(costPrice, sellingPrice, unitsSold){
    let profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
}
calculateProfit(20,30,100); // data to show total profit 
calculateProfit(50,70,200);// same with this one (both shoudl return with different outputs)

// "Task 2 - Sales Tax Computation."
function calculateSalesTax (amount, taxRate) {
let Salestaxes = amount * taxRate;
console.log(`Sales tax Computation: $${Salestaxes}`);
}

calculateSalesTax(100, 0.07); 
calculateSalesTax(500, 0.1);  

//"Task 3: Employee Bonus Calculation"

let calculateBonus = (salary, performanceRating) => {
    let bonusPercentage = 0;
    
    if(performanceRating === "Excellent") {
    bonusPercentage = 0.20;
}   else if (performanceRating === "Good"){
    bonusPercentage = 0.10;
}   else if (performanceRating === "Average") {
    bonusPercentage = 0.05;
}

let bonus = salary * bonusPercentage;
console.log (`Bonus: $${bonus}`);
}
calculateBonus(5000, "Excellent"); // output should be 1000
calculateBonus(7000, "Good");      // output shoudl be 700

// Task 4 - Subscription Pricing Model.
function calculateSubscriptionCost(plan, months, discount = 0){
    let monthlyrate = 0;
    if (plan === "Basic"){
        monthlyrate = 10;
    } else if (plan === "Premium"){
        monthlyrate = 20;
    } else if (plan === "Enterprise"){
        monthlyrate = 50;
    } else {
        console.log("The Wrong Plan has been selected");
        return;
    }
    let totalCost = (monthlyrate*months) - discount;
    console.log(`Total Cost: $${totalCost}`)
}; 

calculateSubscriptionCost("Basic", 6, 10); // output should be $50
calculateSubscriptionCost("Premium", 12, 0); // output should be $240

// "Task 5 - Currency Conversion."
function convertCurrency(amount, exchangeRate){
    let convertedAmount = amount * exchangeRate;
    console.log (`Converted amount: $${convertedAmount}`);
}
convertCurrency(100, 1.1);  // output should be $110
convertCurrency(250, 0.85); // output shoudl be $212.5

//"Task 6 - Higher-Order Function for Bulk Orders."

function applyBulkDiscount (orders, discountFunction){
    return orders.map(discountFunction);
}
let orders = [200, 600, 1200, 450, 800];
let discountedOrders = applyBulkDiscount (orders, amount => amount > 500 ? amount*0.9: amount);
console.log(discountedOrders);

// "Task 7 - "Business Expense tracker"
function createExpenseTracker() {
    let totalExpenses = 0;
    
    return function(amount) {
        totalExpenses += amount;
        return `Total Expenses: $${totalExpenses}`;
    };
}
let tracker = createExpenseTracker();
console.log(tracker(200)); // Expenses should be 200
console.log(tracker(150)); // expenses should be 350

//"Task 8 - Employee Promotion Evaluation."

function calculateYearsToPromotion (employeelevel){
    if (employeelevel >= 10){
        return 0;
    }
    return 2 + calculateYearsToPromotion(employeelevel + 1);
}

console.log(`Years to Level 10: ${calculateYearsToPromotion(7)}`); // output should be 10:6
console.log(`Years to Level 10: ${calculateYearsToPromotion(5)}`);// output should be 10:10