// console.log("Hello");

//Functii

//functii simple
function logHelloToConsole(){
    console.log("Hello");}
logHelloToConsole();

//functii cu parametrii

//js docs /** + enter = hinturi pentru ce face functia

/**
 * this function logs in console adding a to b
 * @param {number} a 
 * @param {number} b 
 */
function logSum(a,b) {
    let sum = a + b;
    console.log(`${a} + ${b} = ${sum}`)}
logSum(12,33);
logSum(3,5);


//functii cu return
/**
 * compute sum of a and b and returns the result
 * @param {number} a 
 * @param {number} b 
 * @returns number
 */
function getSum(a,b){
    let sum = a + b;
    return sum;}

let result1 = getSum(12,13);
console.log("computed sum of 12 and 13 is:", result1);
let result2 = getSum(result1, 21);
console.log(`computed sum of ${result1} and 21 is ${result2}`);



//functii anonime (ca normale, dar le definim fara sa le dam nume)

const sayHello = function(){
    console.log("Hello");}
sayHello();
sayHello();

function modifyWithCallBack(name, callback){
    const modifyName = callback(name);
    return modifyName;}

const modified =modifyWithCallBack("Miriam", function(name){
    return name.toUpperCase();
} )
console.log(modified);


//arrow functions - functii anonime fara cuvantul function

const sayGoodbye = () => console.log("Goodbye!");
sayGoodbye();

//arrow functions cu parametrii

const sayGoodbyeTo = name => console.log(`Goodbye ${name}!`);
sayGoodbyeTo("Miriam");

const sayHelloAndGoodbyeTo = name => {
    console.log(`Hello ${name}!`);
    console.log(`Goodbye ${name}!`);
}
sayHelloAndGoodbyeTo("George");
sayHelloAndGoodbyeTo("John");