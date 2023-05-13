import { add } from "./utility"

const firstNumber = 2
const secondNumber = 3

let userName: string
userName = "mrspotts"

                      
function showUser(user:string):string {
    return `Welcome, ${user}!`
} 

console.log(add(firstNumber, secondNumber))
console.log(showUser(userName)) 
