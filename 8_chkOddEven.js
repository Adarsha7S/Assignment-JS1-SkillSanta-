// for loop that will iterate from 20 to 30. For each iteration, it will check if the current number is odd or even,
// and display a message to the screen
for (var x=20; x<=30; x++ ) {
    if (x === 0) {
            document.write(x +  " is even ");
    }
    //it will write the even num
    else if (x % 2 === 0) {
            document.write(x + " is even " + "<br>");   
    }
    else {
            //it will write the odd num
            document.write(x + " is odd " + "<br>");
    }
}