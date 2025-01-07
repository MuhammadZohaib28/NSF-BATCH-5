// IF ELSE - ELIF LADDER

let userMarks = 121;

if (userMarks >= 90) {
    console.log(`Student marks are ${userMarks}. Your grade is A+`)
} else if (userMarks >= 80) {
    console.log(`Student marks are ${userMarks}. Your grade is A`)
} else if (userMarks >= 70) {
    console.log(`Student marks are ${userMarks}. Your grade is B+`)
} else if (userMarks >= 60) {
    console.log(`Student marks are ${userMarks}. Your grade is C`)
} else if (userMarks >= 50) {
    console.log(`Student marks are ${userMarks}. Your grade is D`)
}
else {
    console.log(`Student marks are ${userMarks}. Your grade is F.`)
}




// = - Assign
// == - Comparision
// === - Comparision && Type

let userAge = 20;
let time = "Morning"


if (userAge >= 18 && time === "Afternoon") {
    console.log("You have got 50% discount")
} else {
    console.log("You have got nothing")
}

// && - AND OPERATOR
// || - OR OPERATOR
// ! - NOT OPERATOR




const fruits = ["Apple", "Banana", "Grapes", "Guava"]

let userFruit = "Apple"


if (fruits.includes(userFruit)) {
    console.log(`Fruit is ${userFruit} have picked .`)
} else {
    console.log(`Fruit not available.`)
}


let password = "AA";
let userPass = "AA"

let email = "AAA";
let userEmail = "AAA"


if (userPass === password && userEmail === email) {
    console.log("Log in successful")
} else {
    console.log(`Try Again`)
}