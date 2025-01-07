// WHILE LOOP
// DO WHILE LOOP
// for in loop
// for of loop
//IF ELSE CONDITIONS



let i = 0;

while (i <= 10) {
    console.log(i)
    i++;
}


const password = "qwerty12345"
let userInput = "qwerty12345"

do {
    console.log("Password is incorrect")
    console.log("Password is correct")

} while (userInput !== password);



//FOR OF LOOP
const names = ["Sumair", "Ali", "Haider", "Muskaan","Haider", "Muskaan","Haider", "Muskaan","Haider", "Muskaan",] 
for(let name of names){
    console.log(name)
}







//IF ELSE

let userAge = prompt("Please enter your age");

if(userAge >= 18){
    console.log("User is eligible for CNIC")
} else {
    console.log(`User is not eligible for CNIC, because user age is ${userAge} and you are underage`)
}






