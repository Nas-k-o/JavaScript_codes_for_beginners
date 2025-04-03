//This file will contain several function which will represend all of the basics of JavaScript

function userChoice() {
    let choice = prompt("Choose: maxNumber, fizzbuzz, even, odd");
    if (choice === "maxNumber") maxNumber(+prompt("First number:"), +prompt("Second number:"));
    else if (choice === "fizzbuzz") fizzbuzz(+prompt("Enter a number:"));
    else if (choice === "even") even(prompt("Numbers (comma-separated):").split(",").map(Number));
    else if (choice === "odd") odd(prompt("Numbers (comma-separated):").split(",").map(Number));
    else console.log("Invalid choice");
}

userChoice();

function maxNumber(num1, num2){
    if(num1 > num2){
        console.log(num1 + " is bigger than " + num2)
    }
    else{
        console.log(num2 + " is greater than " + num1)
    }
}

function fizzbuzz(num){
    if(num % 3 === 0 && num % 5 === 0){
        console.log("FizzBuzz")
    }
    else if (num % 3 === 0){
        console.log("Fizz")
    }
    else if (num % 5 === 0){
        console.log("Buzz")
    }
    else{
        console.log("Try again")
    }
}

function even(numbers){
    for(let num in numbers){
        if(num % 2 === 0){
            console.log(num)
        }
    }
}

function odd(numbers){
    for(let num in numbers){
        if(num % 2 === 1){
            console.log(num)
        }
    }
}

userChoice();