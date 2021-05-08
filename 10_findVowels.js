// JavaScript program to count vowels in a string
 
      // Function to check the Vowel
      function isVowel(ch) {
        ch = ch.toUpperCase();
        return ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U";
      }
 
      // Returns count of vowels in str
      function countVowels(str)
      {
        for (var i = 0; i < str.length; i++)
          if (isVowel(str[i]))
           
            // Check for vowel
            console.log(str[i]);
        return str;
      }
       // Main Calling Function
 
      // string object
      var str = "Hey This is Skillsanta JS Training";

       // Total numbers of Vowel
       console.log(countVowels(str));
        
       // This code is contributed by rdtank.
 