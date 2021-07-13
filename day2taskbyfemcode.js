//day 2 of femcode challenges
// program to generate a multiplication table if and only if n is a multiple of 3, 5 or 7

// take input from the user
const number = parseInt(prompt("Please enter a value for n : "));

//creating a multiplication table if and only if n is a multiple of 3,5 or 7
function multiplicationTable(number){
if ((number %3 ==0) || (number%5==0 )|| (number%7==0)){
for(let i = 1; i <= 20; i++) {
    // multiply i with n
    let result = i * number;
    // display the result
    console.log('${number} * ${i} = ${result}');
}
}
else {console.log("The number " + number + "is nt a multiple of 3,5 or 7") }
}
