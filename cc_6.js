function calculateProfit(costPrice, sellingPrice, unitsSold){
    let profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
}
calculateProfit(20,30,100) // data to show total profit 
calculateProfit(50,70,200) // same with this one (both shoudl return with different outputs)
