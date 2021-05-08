// program to find the largest among three numbers

// take input from the user
let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));
let num3 = parseFloat(prompt("Enter third number: "));

function GFG( num1, num2, num3 ) {
    if( num1 > num2 ) {
        if( num1 > num3 ) {
            return num1;
        }
        else {
            return num3;
        }
    }
    else {
        if( num2 > num3 ) {
            return num2;
        }
        else {
            return num3;
        }
    }
} 
document.write("The largest number among three numbers is :-  " + GFG(num1, num2, num3));