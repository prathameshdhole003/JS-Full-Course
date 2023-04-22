//Date and Time objects in JavaScript
//JavaScript date objects represent a single moment in a platform-independent format. Date objects contain a number that represents milliseconds since 1 Jan 1970 UTC 

//Creating date objects
//There are 4 ways to create a new date

// 1.new Date()
// 2.new Date(year, month, day, hours, minutes, seconds, milliseconds) <- takes 7 arguments
// 3.new Date(milliseconds)
// 4.new Date(date string)

let currDate = new Date();
console.log(currDate);

let currDate1 = new Date().toLocaleString(); //Displays date and time
console.log(currDate1);

let currDate2 = new Date().toString(); //Displays day, month, date, year, time 
console.log(currDate2);

let currTime = Date.now(); //Returns no of milliseconds elapsed since 1 Jan 1970
console.log(currTime);

let newDate = new Date(2023, 1, 7, 22, 12, 45, 23);
//7 parameters -> year, month, day, hour, miuntes, seconds, milliseconds
console.log(newDate);
console.log(newDate.toLocaleString())

let d = new Date("February 2, 2023 22:20:06");
console.log(d.toLocaleDateString()); // Displays only date 
console.log(d.toLocaleTimeString()); // Displays only time

let d1 = new Date(1675788699912); //Number of milliseconds are passed as parameter
console.log(d1.toLocaleString());

//How to get individual date
let curDate = new Date();
console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth());
console.log(curDate.getDate());
console.log(curDate.getDay());

//How to set individual date
let curDate1 = new Date();
console.log(curDate1.setFullYear(2023));
console.log(curDate1.setFullYear(2023, 11, 25));

let setMonth = curDate.setMonth(11);
console.log(setMonth);

console.log(curDate.setDate(6));
console.log(curDate1.toLocaleString());

//Time Methods
const curTime = new Date();
console.log(curTime);

console.log(curTime.getTime());   //Returns number of milliseconds since January 1, 1970
console.log(curTime.getHours());
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());

const curTime1 = new Date();
console.log(curTime1.setHours(10));
console.log(curTime1.setMinutes(12));
console.log(curTime1.setSeconds(45));
console.log(curTime1.setMilliseconds(56));