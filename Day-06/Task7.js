function Hello(Secondword){
    return "Hello" + Secondword;
}

console.log(Hello("World"));

(function (word) {
    console.log(`Hello, ${word}!`);
})("JavaScript");



