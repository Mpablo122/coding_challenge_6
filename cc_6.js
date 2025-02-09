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