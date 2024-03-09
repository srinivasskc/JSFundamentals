//Concatenation and Interpolation

var price = 100
var itemName = "table"

var messageToPrint = "The price of the cup is 50 dollars"
console.log(messageToPrint)

var messageToPrint1 = "The price of the "+itemName+ " is "+price+ " dollars"   //Concatenation
console.log(messageToPrint1)

var messageToPrint2 = `The price of the ${itemName} is ${price} dollars`   //Interpolation
console.log(messageToPrint2)
