let std1 = "Tauseeq"
let std2 = "Hamza"
let std3 = "Bisma"


console.log(std2)
console.log(std1)
console.log(std3)


//DRY - DO NOT REPEAT YOURSELF


//ARRAYS IN JS

const studentsName = ["Hooriya", "Tauseeq", "Manzar", "Ghulam Taqi"]
studentsName.push("Hassan")
console.log(studentsName)


studentsName.pop()
console.log(studentsName)


studentsName.shift()
console.log(studentsName)




const numbers = [1, 31, 54, 16, 7, 2, 4, 43, 32]

const filteredNumbers = numbers.filter((num) => num > 10)


console.log(filteredNumbers)


//custom sort
const sortedNumbers = filteredNumbers.sort((a, b) => (a - b));

const nonCustomSort = filteredNumbers.sort()

console.log(sortedNumbers)


const multiplyArray = sortedNumbers.map((mul) => mul + 10)

console.log(multiplyArray)



const findArr = multiplyArray.find((num) => num > 28)
console.log(findArr)





// const abdulBasitArr = mul.unshift("Abdul Basit")


// console.log(mul)


const bigData = ["Tauseeq", "Sumair", "Adnan", "Ghulam Taqi", "Abdul Basit", "Ubaidullah"];
console.log(bigData, "ORIGINAL")

const newArrr = bigData.filter((name) => name !== "Adnan" && name !== "Ghulam Taqi");

console.log(newArrr, "SLICED")







// ARRAYS
// Push
// POP
// shift
// Unshift

//YEH IMPORTANT HAIN
// Sort
// Filter
// Map
//find




