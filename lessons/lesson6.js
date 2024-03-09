//Conditional Statements


//Driver License
var ageIsMoreThanEighteen = true
var isUSCitizen = true

if(ageIsMoreThanEighteen && isUSCitizen)
{
    console.log("The Customer is eligible for Driver License")

}
else
{
    console.log("The Customer is not eligible for Driver License")

}

//If hour between 6 and 12 print "Good Morning"
//If hour between 12 and 16 print "Good Afternoon"
//Otherwise "Good Evening"

var hour = 13

if(hour >= 5 && hour < 12)
{
    console.log("Good Morning")
}
else if(hour >=12 && hour<16)
{
    console.log("Good Afternoon")
}
else
{
    console.log("Good Evening")
}
