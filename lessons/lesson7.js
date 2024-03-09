//Loops

/*
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
*/

/* for(loop) or for(i loop)
for(statement1;statement2;statement3)
{
    
}
*/

for(let i=0; i<5; i=i+1)
{

    console.log("Hello JS!" + i)
}


for(let i=0; i<5; i++)
{
    console.log("Hello World!" + i)
}


//Classical - ES5 Syntax for loop
//For of Loop
var cars = ["Volvo", "Toyota", "Tesla"]
for(let car of cars)
{
    console.log(car)

    if(car=="Toyota"){
        break
    }
}


//ES6 - Syntax for each Loop
cars.forEach(car => {
    console.log(car)

})


//Another Example for For Each

let brands = ["Babyhug", "Pampers", "Bamboo", "Littles"]

brands.forEach(brand => {
    console.log(brand)
})
