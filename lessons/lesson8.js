//Functions

//Declarative Function

function helloOne()
{
    console.log("Hello One!")
}

helloOne()


// Anonymous Function
var helloTwo = function()
{
    console.log("Hello Two")
}
helloTwo()

//Anonymous Function with ES6 Syntax or arrow function.
var helloThree = () => {
    console.log("Hello Three")
}
helloThree()

//Function with Arguments.
function printName(name, lastName){
    console.log(name + ' ' + lastName)
}
printName('srinivas', 'kadiyala')


//Function with Return
function multiplyByTwo(number){
    var result = number * 2
    return result
}
var myResult = multiplyByTwo(2)
console.log(myResult)


//Importing Function from printHelper.js
import { printAge } from '../helpers/printhelper.js'
printAge(5)
//This throws an error - SyntaxError: Cannot use import statement outside a module
//So need to update package.json with type="module" 
//Again it will throw an error - SyntaxError: The requested module '../helpers/printhelper.js' does not provide an export named 'printAge'
// So we need to go to printhelper.js and add export before function


//import everything
import * as helper from '../helpers/printhelper.js'
helper.printAge(10)
