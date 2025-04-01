/*Task3. Let's calculate how much you earn from your office.
- [ ] You get 12,300 rupees as your monthly salary.
- [ ] You get a 20% bonus on your annual salary.
- [ ] How much money do you make per annum as a CTC?
*/
function calculateCTC(monthlySalary, bonusPercentage) {
    const annualSalary = monthlySalary * 12; 
    const totalCTC = annualSalary *  (1+bonusPercentage / 100);
    console.log(`Your annum CTC is: ${totalCTC} rupees`);
}
const monthlySalary = 12300; // Monthly salary
const bonusPercentage = 20; // Bonus percentage
calculateCTC(monthlySalary, bonusPercentage);