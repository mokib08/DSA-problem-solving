
// Qa-1. Accept an integer and Print hello world n times.
// solution : 
    var m = Number(prompt("Enter a number"));
    for(let i=1; i<= m; i++){
        console.log("hello world");
    }



let j = Number(prompt("Enter a number"));

if(isNaN(j)){
    console.log("Invalid input ❌")
}else{
    for(let i=1; i<=j; i++){
        console.log("Hello world");
    }
}

// Question-2: sum up to n terms.
var m = 10;
var sum = 0;
for(let i = 1; i<=m; i++){

    sum =  sum + i;
}
console.log(sum)


// Question-3: Factorial of a number.

// solution : 
var b = 5;
var factor = 1;
for(let i = 1; i<=b; i++){
    factor *= i;// sort hand way 
}
console.log(factor)


// Question-4: print the sum of all even & odd numbers in a range seperately.


var c = 10;
var evenSum = 0, oddSum = 0;
for(let i = 1; i <= c; i++){
    if(i % 2 == 0) evenSum = evenSum + i;
    else oddSum = oddSum + i;
}
console.log("Event sum "+ evenSum);
console.log(("Odd sum "+ oddSum));


// Question-5: Print all the factors of a number.

// solution : 
var nt = Number(prompt("Enter a Factore"));

for(var i = 1; i<=nt/2; i++){
    if(nt % i === 0) console.log(i)
}
console.log(nt)



// Question-6: check if the number is Prime or not 

// solution : 
var nt = Number(prompt("Enter prime"));
var isPrime = true;

for(var i = 2; i<nt/2; i++){
    if(nt % i ==0){
        isPrime = false;
        break;
    }
}
if(isPrime) console.log("Prime Number");
else console.log("not prime number ❌")

// Or 
let n = Number(prompt("Enter a number"));
let isPrime = isPrimeFun(n);
if(isPrime) console.log("Prime number");
else console.log("Not Prime number")

function isPrimeFun(n){
    if(n<=1) return false;
    if(n ==2) return true
    if(n % 2 == 0) return false;
    for(let i = 3; i<=Math.floor(Math.sqrt(n)); i +=2){
        if( n % i == 0) return false;
    }
    return true;
}

let x = 1;
while(true){
    console.log(x);
    x++;
     if (x > 3) break;
}



