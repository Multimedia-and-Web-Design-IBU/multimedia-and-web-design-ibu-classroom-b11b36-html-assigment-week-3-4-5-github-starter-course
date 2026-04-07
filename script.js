2 + 2         // addition → 4
10 * 5        // multiplication → 50
100 / 4       // division → 25
7 - 3         // subtraction → 4
2 ** 8        // exponentiation (2 to the power of 8) → 256
17 % 5        // modulus (remainder of 17 ÷ 5) → 2


console.log("Arta");
console.log(7*24*60);
console.log(123 % 10);
//console.log(Arta); it writes Arta is not defined, because it thinks Arta is a variable not a string.


// let age = 20; 
// console.log(age);
const name = "Alex"; 
console.log(name); 
// const name = "Jordan"; 




let score = 100; 
let temperature = 36.6; 
let greeting = "Hello, world!"; 
// let city = 'Skopje' 
let isLoggedIn = true; 
let hasWon = false; 
console.log(typeof score);      
console.log(typeof greeting);  
console.log(typeof isLoggedIn); 



// let firstName = "Alex"; 
// let lastName = "Johnson"; 
// let fullName = firstName + " " + lastName; 
// console.log(fullName);
// let message = `Hello, ${firstName}! You have ${3 + 4} messages.`; 
// console.log(message);  
// console.log(fullName.length);      
// console.log(fullName.toUpperCase()); 
// console.log(fullName.includes("Alex")); 




const firstName = "Arta";
const lastName = "Livareka";
const age = 25;
const city = "Skopje";
const fullName = firstName + " " + lastName;
const sentence = `My name is ${fullName}. I am ${age} years old and I live in ${city}.`;
console.log(sentence);
console.log(fullName.length);
console.log(city.includes("o"));
console.log(fullName.toLowerCase());



function greet(name) { 
  return "Hello, " + name + "!"; 
} 
console.log(greet("Taylor"));  
console.log(greet("Sam"));       
console.log(greet("the class"));



// Traditional function declaration 
// function double(n) { 
//   return n * 2; 
// } 
// Same function as an arrow function 
const double = (n) => n * 2; 
console.log(double(5));  
console.log(double(21)); 
// Arrow function with multiple parameters 
const add = (a, b) => a + b; 
console.log(add(3, 7)); 
// Arrow function with a body (multiple lines) 
const describe = (name, age) => { 
  const sentence = `${name} is ${age} years old.`; 
  return sentence; 
}; 
console.log(describe("Alex", 20)); 




const isEven = (n) => n % 2 === 0; 
console.log(isEven(4));  
console.log(isEven(7)); 
console.log(isEven(100)); 
console.log(isEven(0));  



const celsiusToFahrenheit = (c) => (c * 9/5) + 32;
const fahrenheitToCelsius = (f) => (f - 32) * 5/9;
console.log(celsiusToFahrenheit(0));    
console.log(celsiusToFahrenheit(100));   
console.log(fahrenheitToCelsius(98.6));  
const describeTemp = (c) => {
    const f = celsiusToFahrenheit(c);
    return `${c}°C is ${f}°F`;
};
console.log(describeTemp(37));




function classify(number) { 
  if (number > 0) { 
    return "positive"; 
  } else if (number < 0) { 
    return "negative"; 
  } else { 
    return "zero"; 
  } 
} 
console.log(classify(42)); 
console.log(classify(-7));  
console.log(classify(0));   




// for loop
    // for (let i = 1; i <= 10; i++) { 
    //   console.log(i); 
    // } 


// Loop from 1 to 20 and label each number 
// for (let i = 1; i <= 20; i++) { 
//   if (i % 2 === 0) { 
//     console.log(i + " is even"); 
//   } else { 
//     console.log(i + " is odd"); 
//   } 
// } 

 

// for (let i = 1; i <= 20; i++) { 
//   if (i === 15) { 
//     console.log("Stopping at 15!"); 
//     break;  
//   } 
//   console.log(i); 
// } 





const multiTable = (base) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${base} × ${i} = ${base * i}`);
  }
};
multiTable(3);
multiTable(7);
multiTable(12);






function fizzBuzz(n) { 
  if (n % 3 === 0 && n % 5 === 0) { 
    return "FizzBuzz"; 
  } else if (n % 3 === 0) { 
    return "Fizz"; 
  } else if (n % 5 === 0) { 
    return "Buzz"; 
  } else { 
    return n;  
  } 
} 
for (let i = 1; i <= 30; i++) { 
  console.log(fizzBuzz(i)); 
} 

function fizzBuzzWhizz(n) { 
  let result = ''; 
  if (n % 3 === 0) result += 'Fizz'; 
  if (n % 5 === 0) result += 'Buzz'; 
  if (n % 7 === 0) result += 'Whizz'; 
  //short circuit evaluation: if result is empty string, it will return n, otherwise it will return result
  return result || n;  
} 
console.log(fizzBuzzWhizz(15)); 
console.log(fizzBuzzWhizz(21));  
console.log(fizzBuzzWhizz(105)); 
console.log(fizzBuzzWhizz(11)); 





function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function fizzPrime(n) {
  let result = "";
  if (n % 3 === 0) result += "Fizz";
  if (n % 5 === 0) result += "Buzz";
  if (result === "" && isPrime(n)) {
    return "Prime";
  }
  return result || n;
}

for (let i = 1; i <= 30; i++) {
  console.log(fizzPrime(i));
}





// 1. What is the difference between let and const? When would you use each? 
// let is used for variables that can change later, while const is used for values that should not change. 
// Use const by default, and let only when you know the value will be updated.

// 2. In your own words, what is a function and why is it useful? 
// A function is a block of code that performs a specific task. 
// It is useful because it lets you reuse code, keep programs organized, and avoid repetition.

// 3. What would happen if you wrote the FizzBuzz conditions in the wrong order? 
// If the order is wrong, some conditions will be checked too early and others won’t run. 
// For example, checking n % 3 === 0 before n % 3 === 0 && n % 5 === 0 would never return "FizzBuzz".

// 4. Write one thing that confused you today and bring it to the next class. 
