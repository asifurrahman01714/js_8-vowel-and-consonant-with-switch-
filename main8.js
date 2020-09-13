
var letter=prompt("enter the letter: ")  ;
letter=letter.toLowerCase();

switch(letter){
    case "a":   
    case "e":   
    case "i":
    case "o":
    case "u":
        document.write("The letter is Vowel");
        break;

   default:
       document.write("The letter is consonant");



}

