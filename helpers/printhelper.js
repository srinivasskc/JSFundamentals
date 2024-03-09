export function printAge(age){
    console.log(age)
}


export class CustomerDetails {
    printName(firstName, lastName){
        console.log(firstName+' '+ lastName)
    }

    printFirstName(firstName){
        console.log(firstName)
    }

    /**
     * This method will print last Name
     * @param {string} lastName 
     */


    printLastName(lastName){
        console.log(lastName)
    }

}