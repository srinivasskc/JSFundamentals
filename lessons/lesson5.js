//Logical Operators

//Logical AND Operator


//All values has to be TRUE for the expression to be TRUE
console.log(true && true)  //True
console.log(true && false) //False
console.log(false && false) //False


//Any values has to be TRUE for the expression to be TRUE
console.log(true || false) //True
console.log(true || true)  //True
console.log(false || false)  //False

//Driver License
var ageIsMoreThanEighteen = false
var isUSCitizen = true

//AND Condition
var eligibleForDriversLicense = ageIsMoreThanEighteen && isUSCitizen
console.log("[AND] The Customer is eligible for Driver License :"+ eligibleForDriversLicense)


//OR Condition
var eligibleForDriversLicense = ageIsMoreThanEighteen || isUSCitizen
console.log("[OR] The Customer is eligible for Driver License :"+ eligibleForDriversLicense)

//Logical NOT
console.log(true)

console.log(!true)


// Equal
console.log(6 == 10)
//Is Not Equal To
console.log(6 !== 10)


