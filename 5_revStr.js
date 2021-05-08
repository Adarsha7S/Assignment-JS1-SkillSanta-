// reverse a given string and also
// check if string is palindrome or not

let str = prompt("Enter an String :");

// function to reverse the string
function reverse(str)
{
  // variable holds reverse string 
  let rev_str = "";
  for (let i = str.length-1 ;i >= 0 ;i--)
  {
    rev_str+= str[i];
  }
  // return reverse string 
  return rev_str;
}

//  function checking string is palindrome or not 
function is_palindrome(str)
{
  reverse_str = reverse(str);
  //  condition checking if reverse str is 
  // same as string it is palindrome
  // else not a palindrome
  if (reverse_str === str)
  {
    document.write(str +" :- passed string is palindrome ");
  }
  else
  {
    document.write(str +"  :-passed string is not palindrome");
  }
}
// calling the palindrome function
is_palindrome(str);