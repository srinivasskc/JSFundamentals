//This is typescript file - extension ts.


var customerFirstName = 'John'
var customerLastName = 'Smith'
var customerAge = 25

//customerFirstName = 100
//Typescript disallows to assign the number to the string data type variable declared.

//We can explicity mention the data type

var customerFatherName : string = 'Matt'
var customerFatherAge : number = 77

//Custom Types.
type Customer = {myFirstName: string, myLastName: string, myAge: number, isActive: boolean}

var customerDetails: Customer = {
    myFirstName: 'John',
    myLastName: 'Sena',
    myAge: 22,
    isActive: true
}
