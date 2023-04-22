//JavaScript string is zero or more characters written inside quotes
//You can use single quotes or double quotes

let myName = "Prathamesh";
let mySurname = "Dhole";
console.log(myName);
console.log(mySurname);

//Escape character -> If double quote is itself a part of sentence use escape characters
let sentence = "We are so-called \"Vikings\" from North";
console.log(sentence);

//You can also use single and double quotes alternately

//Finding string in a string
//String_prototype.indexOf(searchValue, fromIndex)

const myData = "I am a student";
console.log(myData.indexOf("student"));
console.log(myData.indexOf("p"));             //Returns -1 if value is not present
console.log(myData.indexOf("a", 3));      

//String_prototype.lastIndexOf(searchValue, fromIndex)
//Find given value from last index

console.log(myData.lastIndexOf("a", 6))

//Searching for a string inside a string
//String_prototype.search(searchValue)
//Search method cannot take start position as second argument

console.log(myData.search("I"));
console.log(myData.search("i"));              //Returns -1 if value is not present

// Extracting string parts
// There are three methods for extracting a part of a string

// 1. slice(start, end)                End index is excluded
// 2. substring(start, end)
// 3. substr(start, length)

// 1. Slice method extracts a part of a string and returns extracted part in a new string

var str = "This is a string";
var newStr = str.slice(0, 6);
console.log(newStr);

var newStr1 = str.slice(2, -3);        //Start from 2nd index and exclude last 3 characters
console.log(newStr1);

// 2. Substring method is similar to slice but, it cannot take negative indexes
var newStr2 = str.substring(1, 4);
console.log(newStr2);

var newStr3 = str.substring(3, -5);    //Negative value is converted to 0
console.log(newStr3);                  //Gives substring from 0 to 3 as output

//3. Substr is similar to slice() but it accepts the second parameter as length of substring
// Does not accept negative values
var newStr4 = str.substr(2, 4);
console.log(newStr4);
var ans = str.substr(-4);              //Will show last 4 characters
console.log(ans);

// Replacing string content
// String_prototype.replace(searchFor, replaceWith)

// Replace method replaces a specified value with another value in a string
// 1. Replace() method does not change the string it is called on instead it returns a new string
// 2. By default, replace method only replaces the first match
// 3. By default, replace method is case sensitive

var sen = "My name is prathamesh prathamesh";
var repStr = sen.replace("prathamesh", "Pratham");
console.log(repStr);

// Extracting string characters
// 1. charAt() -> Returns the characeter at specific position
console.log(sen.charAt(3));
console.log(sen.charAt(sen.length-1));

// 2. charCodeAt() -> Returns the unicode of character at a specified index in a string
// Method returns a UTF-16 code(an integer between 0 & 65535)
console.log(str.charCodeAt(3));

// Property Access
console.log(sen[1]);        //Returns character at given index

//Other useful methods

let myname = "Prathamesh";
let mysurname = "Dhole";
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());

//String.concat
console.log(myname.concat(mysurname));
console.log(myname.concat(" ", mysurname));

//String.trim() -> Removes whitespaces from both sides of string
var s = "     Hello World     ";
console.log(s.trim());

//Converting string to an array
//Use split() method

var txt = "a, b | c, d";
console.log(txt.split(","));
console.log(txt.split("|"));
console.log(txt.split(" "));