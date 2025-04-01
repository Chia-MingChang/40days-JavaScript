/*## 3. Calculate CTC with a Bonus
Let's calculate how much you earn from your office.
- [ ] You get 12,300 rupees as your monthly salary.
- [ ] You get a 20% bonus on your annual salary.
- [ ] How much money do you make per annum as a CTC?
*/
function checkeliigibility(age) {
    if (age < 18) {
        console.log(`You are not eligible for a driving license.`);
    } else {
        console.log(`You are eligible for a driving license.`);
    }
}
const age = 23; // age
checkeliigibility(age);