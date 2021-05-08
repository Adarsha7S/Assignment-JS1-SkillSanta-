//4.check whether a given integer is within range of 50-100 or not

let num1 = parseInt(prompt("Enter an number :"));

if (num1 >= 50 && num1 <= 100) {
    document.write(num1+": The given number is in the rage of 50-100");
}else{
    document.write(num1+": The given number is NOT in range of 50-100")
}