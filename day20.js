//SWITCH CASES
//TERNARY OPERATOR
//OBJECTS

let softdrink = "Sprite"

switch (softdrink) {
    case "Pepsi":
        console.log(`You have chose ${softdrink}. It is 450PKR`)
        break;
    case "Sprite":
        console.log(`You have chose ${softdrink}.`)
        break;
    case "Mountain Dew":
        console.log(`You have chose ${softdrink}.`)
        break;
    default:
        console.log(`You have chose ${softdrink}. It is not available`)
        break;
}



let userAge = 14;


if (userAge > 18) {
    console.log("YOU ARE ELIGIBLE")
} else {
    console.log("YOU ARE NOT ELIGIBLE")
}


userAge >= 18 ? console.log("You are eligible TERNARY") : console.log("You are not eligible TERNARY")


//OBJECTS IS JS
const fruits = ["Grapes", "Apples", "Peach"]

const car = {
    Sno: 1,
    name: "Suzuki Mehran",
    color: "Black",
    chesisNumber: "YEUDB3-2DSFD-3243D",
    model: "2019"
}

console.log(car.name)
console.log(car.color)


const tableHead = Object.keys(car);
const tableData = Object.values(car)

const arr1 = tableHead.map((item) => console.log(item))
const arr2 = tableData.map((data) => console.log(data))

const newArr = [...tableHead, ...tableData]
console.log(newArr, "YEH NEW ARRAY HAI")