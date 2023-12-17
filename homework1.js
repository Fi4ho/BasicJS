// //Homework 01
// function tellStory(name, mood, activity) {
//     let story = "This is " + name + ". " + name + " is a nice person. Today they are " + mood + ". They are " + activity + " all day. The end.";
//     return story;
// }
// let name = "Filip";
// let mood = "happy";
// let activity = "coding";
// let story = tellStory(name, mood, activity);
// console.log(story);




//Homework 02
// function calculateSumAndPrint(numbers) {
//     if (numbers.length !== 5) {
//         console.error("The array must contain exactly 5 numbers.");
//         return;
//     }
//     let sum = numbers.reduce(function (acc, num) {
//         return acc + num;
//     }, 0);
//     console.log("The sum of the numbers is: " + sum);
// }
// var numbersArray = [1, 2, 3, 4, 5];
// calculateSumAndPrint(numbersArray);


// function validateNumber(num) {
//     if (isNaN(num) || typeof num !== 'number') {
//         console.error("Invalid number detected.");
//         return false;
//     }
//     return true;
// }

// function calculateSumAndPrint(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (!validateNumber(numbers[i])) {
//             return;
//         }
//     }

//     let sum = numbers.reduce(function (acc, num) {
//         return acc + num;
//     }, 0);

    
//     console.log("The sum of the numbers is: " + sum);  
// }
// let numbersArray = [1, 2, 3, 4, "invalid"];

// calculateSumAndPrint(numbersArray);




//Homework 03
// function concatenateStrings(stringsArray) {
//     if (!Array.isArray(stringsArray) || stringsArray.length === 0) {
//         console.error("Error: Input must be a non-empty array of strings.");
//         return "";
//     }

//     let resultString = stringsArray.join(" ");

//     return resultString;
// }

// let inputArray = ["Hello", "there", "students", "of", "SEDC", "!"];
// let result = concatenateStrings(inputArray);

// console.log(result);






//Homework 04
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i + "\n");
//     } else {
//         console.log(i + " ");
//     }
// }






//Homework 05
// function sumMaxAndMin(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//         console.error("Error: Input must be a non-empty array of numbers.");
//         return null;
//     }

   
//     let numbers = arr.filter(function (item) {
//         return typeof item === 'number' && !isNaN(item);
//     });

//     if (numbers.length === 0) {
//         console.error("Error: No valid numbers in the array.");
//         return null;
//     }

//     let max = Math.max(...numbers);
//     let min = Math.min(...numbers);

//     let sum = max + min;

//     console.log("Max: " + max + ", Min: " + min + ", Sum: " + sum);

//     return sum;
// }
// var arr = [3, 5, 6, 8, 11];
// var result = sumMaxAndMin(arr);





//Homework 06

function combineNames(firstNames, lastNames) {
    if (!Array.isArray(firstNames) || !Array.isArray(lastNames) || firstNames.length !== lastNames.length) {
        console.error("Input must be two arrays of the same length.");
        return [];
    }

    let fullNames = [];

    for (let i = 0; i < firstNames.length; i++) {
        let fullName = (i + 1) + ". " + firstNames[i] + " " + lastNames[i];
        fullNames.push(fullName);
    }

    return fullNames;
}
let firstNames = ["Bob", "Jill"];
let lastNames = ["Gregory", "Wurtz"];
let result = combineNames(firstNames, lastNames);


console.log(result);
