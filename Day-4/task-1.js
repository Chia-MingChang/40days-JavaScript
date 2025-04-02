/*Task1. What will be the output of this code snippet and why?
 ```js
 let day = "Monday";

switch (day) {
    case "monday":
        console.log("It's the start of the week.");
        break;
    default:
        console.log("It's a normal day.");
}
*/
// Answer: The output will be "It's a normal day." because the switch statement is case-sensitive. Because the value: "Monday" is not the case "monday", the default case is executed. The string "Monday" with an uppercase "M" does not equal "monday" with a lowercase "m". 
// Therefore, the code inside the first case block is skipped, and the code inside the default block is executed instead.