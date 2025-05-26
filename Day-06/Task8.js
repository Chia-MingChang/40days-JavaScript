//Write a function greet(name, callback), where callback prints a message using the name parameter.
function greet(name, callback){
    callback(name);
}

function callback(name){
    console.log('Hello, '+name+'!');
}