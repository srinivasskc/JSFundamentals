//Objects

var customer = {
    firstName: "John",
    lastName: "Smith",
    cars: ['Volvo', 'Toyota', 'Tata', 'Mercedes-Benz']
}

//Accessing values inside the object - way 1: Dot Notation
console.log(customer)
console.log(customer.firstName)
console.log(customer.lastName)


//Accessing values inside the object - way 2: Bracket Notation
console.log(customer)
console.log(customer['lastName'])
customer.firstName='Mike'
console.log(customer['firstName'])


//Interpolation
console.log(`${customer.firstName} ${customer.lastName}`)

//Arrays
var cars = ['Volvo', 'Toyota', 'Tata', 'Mercedes-Benz']
console.log(cars.length)
console.log(cars[1])
console.log(cars[5]) //undefined

cars[0] = 'BMW'
console.log(cars[0])

console.log(customer.cars)
