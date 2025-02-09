// "Task 1 - Business Profit Calculation."
function calculateProfit(costPrice, sellingPrice, unitsSold){
    let profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
}
calculateProfit(20,30,100) // data to show total profit 
calculateProfit(50,70,200) // same with this one (both shoudl return with different outputs)

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
} else if (performanceRating === "Good"){
    bonusPercentage = 0.10;
} else if (performanceRating === "Average") {
    bonusPercentage = 0.05;
}

let bonus = salary * bonusPercentage
console.log (`Bonus: $${bonus}`);
}
calculateBonus(5000, "Excellent"); // output should be 1000
calculateBonus(7000, "Good");      // output shoudl be 700

