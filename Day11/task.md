# Tasks
Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. What will be the output of the following code and why?
```js
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();//1
counter();//2
```
The output of the function: 2
When calling count for the reason count++ making the value of count from 0 at the begining and add 1 becoming 1 as the output.
When calling count for the reason count++ making the value of count from 1 and add 1 becoming 2 as the output and be printed out.

## 2. What will be the output and why?
```js
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());
```
The output of the function: 100
The function: testClosure(), assigned the value 10 to variable x; function () makes x*x , meaning 10*10, so it gets and prints 100.  

## 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Button Click Tracker</title>
    <style>
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <script>
		function Click(){
	let i=0;
	return function(){
		return i++;
		console.log(`Button clicked ${i} times`);
		};
}


        // Dynamically create the button
        const button = document.createElement('button');
        button.textContent = 'Click Me!';

        // Attach the click event handler using the closure
        const handler = Click();
        button.addEventListener('click', Click);

        // Append the button to the body
        document.body.appendChild(button);
    </script>
</body>
</html>

	
## 4. Write a function `createMultiplier(multiplier)` that returns another function to multiply numbers.
Ans.
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}



## 5. What happens if a closure references an object?
- 1) The object is garbage collected immediately
- 2) The object remains in memory as long as the closure exists
- 3) The object is automatically cloned
- 4) None of the Above.
Ans.
2) The object remains in memory as long as the closure exists.

Here’s why:

When a closure references an object, that object is kept alive because the closure still holds a reference to it. JavaScript’s garbage collector only frees memory for objects that are no longer reachable. So if the closure persists—say it’s stored or used somewhere else—the object it references sticks around in memory, too.

🧠 Key insights:

Closures capture references, not copies or clones.

The object isn’t cloned (not option 3), and it’s certainly not garbage collected immediately (not option 1).

Since the closure has access to the object through its scope chain, the garbage collector sees the object as still "reachable."
## 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.
Ans.
function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log(`Incremented: ${count}`);
            return count;
        },
        decrement: function() {
            count--;
            console.log(`Decremented: ${count}`);
            return count;
        },
        reset: function() {
            count = 0;
            console.log(`Reset: ${count}`);
            return count;
        },
        getValue: function() {
            return count;
        }
    };
}
