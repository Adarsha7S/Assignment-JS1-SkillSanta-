// convert temperatures
//from Celsius, Fahrenheit and Fahrenheit to Celsius as per userarguments provide in functions.

//User will select the function to convert the temperature from Celsius, Fahrenheit and Fahrenheit to Celsius
let ct = prompt("Converting Temperatures"+"\n"+"If Convertimg temperatures in to Celsius to fahrenheit Please enter cTof:"+"\n"+"If Convertimg temperatures in to fahrenheit to celsius Please enter fToc:");

//function to convert Celsius to Fahrenheit 
function cTof(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    document.write(message);
}

//function to convert Fahrenheit to celsius
function fToc(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    document.write(message);
} 
if (ct == "cTof") {
    var celsius = parseInt(prompt("Enter the Celsius : "));
    cTof(celsius);
} else if (ct == "fToc") {
    var fahrenheit = parseInt(prompt("Enter the fahrenheit : "));
    fToc(fahrenheit);
} else {
    document.write("please enter a valide input")
}