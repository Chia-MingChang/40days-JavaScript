/* 4. Write a program for the Traffic Light Simulation.
Red Light... Green Light... Let's Play!
- [ ] Create a `color` variable.
- [ ] Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.
*/
let color = prompt("Enter the traffic light color (Red or Green):").trim().toLowerCase();

if (color === "red") {
    console.log("STOP");
} else if (color === "green") {
    console.log("GO");
} else {
    console.log("Invalid color! Please input 'Red' or 'Green'.");
}
