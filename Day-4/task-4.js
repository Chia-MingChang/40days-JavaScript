/*Task4 Pay for your movie ticket
Imagine, the INOX charges ticket prices based on age:
- Children (<18 years): $3
- Adults (18 - 60 years): $10
- Seniors (60+ years): $8

Write a program that prints the ticket price based on the person’s age.
*/


function movieticket(age) {
    if (age < 18) {
        console.log("Ticket price is 3$");
                  }
    else if (age >= 18 && age <= 60) {
        console.log("Ticket price is 10$");
                    }
    else if (age > 60) {
        console.log("Ticket price is 8$");
                    }
    else {
        console.log("Invalid age");
                }
    }