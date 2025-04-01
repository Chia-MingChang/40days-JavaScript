/*5. Create an Electricity Bill Calculator
Let's calculate how much you pay for electricity bills per month and annually.
- [ ] Create a `units` variable. Based on this value you will calculate the total electricity bill for a months.
- [ ] If each day you consume the `units` and each unit cost 150 rupees, how much will you be charged per month?
- [ ] If there is a 20% discount on the annual payment, how much will you be charged for an annua
*/
function electricityBillCalculator(unitsPerDay, unitCost, discountRate) {
    // Calculate daily, monthly, and annual costs
    const dailyCost = unitsPerDay * unitCost;
    const monthlyCost = dailyCost * 30; // Assuming 30 days in a month
    const annualCost = dailyCost * 365; // Assuming 365 days in a year
    const discountedAnnualCost = annualCost * (1 - discountRate / 100);

    // Log results
    console.log(`Your monthly electricity bill is: ${monthlyCost} rupees`);
    console.log(`Your annual electricity bill (before discount) is: ${annualCost} rupees`);
    console.log(`Your annual electricity bill (after ${discountRate}% discount) is: ${discountedAnnualCost} rupees`);

    // Return an object with the results
    return {
        monthlyCost,
        annualCost,
        discountedAnnualCost
    };
}

// Example usage
electricityBillCalculator(10, 150, 20);