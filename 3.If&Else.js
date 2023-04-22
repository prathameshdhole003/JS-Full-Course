//Year is leap or not

var y = 2010;
var z = 2016;

if(y%4 == 0) console.log('y is a leap year');
else console.log('y is not a leap year');

if(z%4 == 0) console.log('z is a leap year');
else console.log('z is not a leap year');

//Falsy values in JavaScript
//We have total 6 falsy values in JavaScript
//0, "", false, null, undefined, NaN

if(0) console.log('You lose the game');
else console.log('You won the game');

if(NaN) console.log('You lose the game')
else console.log('You won the game');

if("") console.log('You lose the game')
else console.log('You won the game');