/*let x,y,z;
x = 5;
y = 6;
z = x+y;
document.getElementById("demo").innerHTML = z;
//rithmetic operators
x = (5+6)*10;
document.getElementById("demo").innerHTML = x
//concactenate letters
x  = "john"+" "+"doe"
document.getElementById("demo").innerHTML = x;
const pi = 3.14
document.getElementById("demo").innerHTML = pi;
//used by professionals
let $ =  2;
document.getElementById("demo").innerHTML = $;

//used as an alias by pro programmers
let _lastname = "mary";
document.getElementById("demo").innerHTML = _lastname;
var x = 2;
{
    var x = 4;
}
document.getElementById("demo").innerHTML = x;
let x = 2;
{
    let x = 4;
}
document.getElementById("demo").innerHTML = x;
let x = 2;   // Allowed

{
let x = 3;   // Allowed
}

{
let x = 4;    // Allowed
}
document.getElementById("demo").innerHTML = x;
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
document.getElementById("demo").innerHTML = PI;
const cars = ['mary','clare','okeke'];
cars[0] = 'saab';
cars.push('bmw');
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
document.getElementById("demo").innerHTML = car;
// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
  }
  document.getElementById("demo").innerHTML = myFunction(1,2);
// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}
document.getElementById("demo").innerHTML = x;
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(77);
  document.getElementById("demo").innerHTML = toCelsius(40);
  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(77);
  let x = toCelsius(77);
  let text = "The temperature is " + x + " Celsius";\
  function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  let car = "fiat"
  const car  = {
    type:"Fiat",model:"500",color:"white"
  };
  const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue",fullname:function(){
    return this.firstName +" "+ this.lastName;}};
  x = person.firstName;
  document.getElementById("demo").innerHTML = person.fullname;
  text = "we are the so called " + " vikings from the north";
  let y =    String("hi john meyers");
  let index = y.indexOf("i");
let index1  = y.lastIndexOf("john")
let y =    String("hi john meyers cat");
text0 = y.match("ohn")//match;
text = y.match(/ohn/)//search;
text1 = y.match(/ohn/g)//global search;
text3 = y.includes("cat")
text4 = y.startsWith("cat")
text5 = y.endsWith("cat")
substitute = 'the';
text   =`The quick
brown fox
jumps "over"
${substitute} lazy dog `
firstname = 'okeke'
lastname ='mary'
text1 =` welcome ${firstname},${lastname}`//string interpolation
let header = "Templates literals";
let tags  = 
  ["template literials","javascript","es6"];
  let html = `<h2>${header}</h2><ul>`;
  for (const x of tags) {
    html += `<li>${x}</li>`;
  }
  
  html += `</ul>`;
let x = 123;
x.toString();
y = x.toExponential();
y2 = x.toFixed(2);
y3 = x.toPrecision(2)
y4 = x.valueOf();
//text = "yes"; this says no
// text = "10"; this shows 10
//text  = " 11,10";//checks if the value is text or nymber
//text = new Date( "2017-09-30")
//y5 = Number(text)
//num = " -10 "
//num = "10.33"
//num = "10 years"
//num   ="10 20 30"
//num = " years 10";//didnt give a value gabe nan
//y6 = parseInt(num)
//floatnum = "10"
floatnum = "years 10"
floatnum  = "10.33"
floatnum = "10 20 30"
floatnum = "100 years";
y7 = parseFloat(floatnum)
y8 = Number.isInteger(10)
y8 = Number.isInteger(10.5)
y8 =Number.isSafeInteger(10)
y8 = Number.isSafeInteger(1234567898765432)
y8  = Number.parseFloat("10 years")
//y8=Number.parseFloat("10");
//y8 = Number.parseFloat("10.33");
//y8 = Number.parseFloat("10 20 30");
//y8 = Number.parseFloat("10 years");
//y8 = Number.parseFloat("years 10");
//let x = Number.EPSILON;
//let x = Number.MAX_VALUE;
//let x = 6;
//x.MAX_VALUE
//let x = Number.MIN_VALUE;
//let x = Number.MIN_VALUE;
//let x = Number.POSITIVE_INFINITY;
//let x = Number.NEGATIVE_INFINITY;
const fruits = ['bannana','orange','apple'];
function myfunction(){
  return x = "red";
}
myarray = []
myarray[0] = Date.now;
myarray[1] = myfunction();
// myarray[2]= "mycars";*/
// function myfunction(value){
//   text+="<li>"+value+"</li>";
// }
// const fruits = ['bannana','orange','apple'];
// let text = "<ul>";
// fruits.forEach(myfunction)
// text +="</ul>"
// document.getElementById("demo").innerHTML= text 
/*;
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon")
//fruits[fruits.length]="lemon";

//Array toString()
//Array pop()
//Array push()
//Array shift()
//Array unshift()
//Array join()
//Array delete()
//Array concat()
//Array flat()
//Array splice()
//Array slice()
//Array length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse*/
//const  d = new Date(2018,5,35,10,33,30);
//const d = new Date(2018 ,11 ,24 ,10 ,33)
//const d = new Date(2018,11);
//const d =  new Date(0);
//const d = new Date(24 * 60 * 60 * 1000);
//const d = new Date(100000000000);
//const d = new Date(-100000000000);
//const d = new Date(2018,12,34);
//d.toDateString()
//d.toUTCString();
//d.toISOString();
//const d = new Date("2023-06-09");
//t = d.getFullYear()
//t = d.getMonth()
//t = d.getDate()
//t = d.getMinutes()
//t = d.getSeconds()
//t = d.getMilliseconds()
//t = d.getTime()
//const months = ["January", "February", "March", "April", "May", "June",
//"July", "August", "September", "October", "November", "December"];
//const d = new Date();
//let t = months[d.getMonth()];
//const d = new Date("2023-06-09");
//d.setFullYear(2020,11,3)
//d.setDate(15)
//d.setDate(d.getDate()+50)
//d.setHours(22)
//d.setMilliseconds(10000)
//d.setMinutes(15)
//d.setSeconds(100)
//d.setTime(12,33)
//d.setMonth(11)

//d  =Math.E
//d = Math.PI
//d = Math.SQRT2
//d = Math.SQRT1_2
//d = Math.LN2
//d=Math.LN10
//d = Math.LOG2E
//d = Math.LOG10E//log e with base 10
//x = 5.6467
//d = Math.round(x)
//d = Math.ceil(x)
//d = Math.floor(x)
//d = Math.trunc(x)
//d = Math.sign(x)
//d = Math.pow(x,x)
//d =Math.sqrt(x)
//d = Math.abs(-x)
//d = Math.sin(x)
//d = Math.cos(x)
//d = Math.min(x,x+1,x+2,x+3)
//d = Math.max(x,x*x,x+1,x+3)
//d = Math.random()
//d = Math.log(x)
//d = Math.log2(x)
//d = Math.log10(x)
//d = Math.floor(Math.random()*100)
//d = Math.floor(Math.random()*101)
//d = Math.floor(Math.random()*10) + 1//random no between 1 and 10
//function gwtrndinteger(min,max){
//
//  return Math.floor(Math.random()*(max-min+1))+min 
//}
//let x  = new Boolean(false);
//let y = new Boolean(false)
//d = x===y
//age = 16
//if(age <18) text = "too young to buy alchol";
//hour = 17
//if (hour<18)
//{
//  greeting  = "good day"
//}
//else{
//  greeting = "good evening "
//}
//x = 15
//y = 12
//if (x>y){
//  text = alert("hello world")
//}
//switch(new Date().getDay()){
//  case 0 :
//    day = "sunday"
//  case 1:
//    day = "monday";
//  case 2:
//    day = "tuesday";
//  case 3:
//    day = "wednessday";
//  case 4:
//    day = "thursday";
//  case 5:
//    day = "friday";
//  case 6:
//    day = "saturday";
//  default:
//    break
//}
/*
let x = "0";
switch (x) {
 case 0:
   text = "Off";
   break;
 case 1:
   text = "On";
   break;
 default:
   text = "No value found"
}*/
/*
let x = a;
switch (x) {
 case b:
   text = alert("Hello");
   break;
 case a:
   text = alert("Welcome");
   break;
 default:
   text = "No value found"
}*/// didnt work
/*let text =""
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
 }*/
 /*text = ""
 let i;
for (i = 0 ;i  < 10 ; i++ ) {
  text = alert(i);
 }
 text = ""
fruit = ['bannana','apple','orange']
for (i in fruit)
{
  text  += fruit[i] + " ";
}
const numbers = [45, 4, 9, 16, 25];
text = ""
numbers.forEach(myfunction);
function myfunction(value,index,array){
  text  += value +" "
}
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for(x of cars){
  text +=x+" ";
}
let language = "JavaScript";
let text = "";
for (let x of language){
  text += x+" "
}
text = ""
i = 1
while(i<10)
{
  text +="the number is "+i;
  i++
}
text = ""
i = 1
do {
  text += "The number is " + i;
  i++;
  }
  while (i < 10);*/
//   const cars = ["BMW", "Volvo", "Saab", "Ford"];
//   let i = 0;
//   let text = "";
//   for (;cars[i];) {
//   text += cars[i];
//   i++;
//   }
//    const cars = ["BMW", "Volvo", "Saab", "Ford"];
//  let i = 0;
//  let text = "";
//  while (cars[i]) {
//  text += cars[i];
//  i++;
//  }
// text = ""
// for ( let i = 0 ;i<10;i++)
// {
//   if (i==3){
//     break;
//   }
//   text+="the number is "+i+"<br>";
// }
// for (let i = 0; i < 10; i++) {
//   if (i === 3) { continue; }
//   text += "The number is " + i + "<br>";
//  }
// text = ""
// const cars = ["BMW", "Volvo", "Saab", "Ford"];
//  list: {
//  text += cars[0] + "<br>";
//  text += cars[1] + "<br>";
//  break list;
//  text += cars[2] + "<br>";
//  text += cars[3] + "<br>";
//  }
// const text = ["a","b","c"];
//  for (const x of text) {
//  // code block to be executed
//  }
// const text = new Set(["a","b","c"]);
// for (const x of text) {
// // code block to be executed
// }
// const text = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
//   ]);
//   for (const x of text) {
//   // code block to be executed
//   }
// const letters = new Set(['a','b','c'])
// letters.add(['a','b','c'])
// text = ""
// for (x of letters.values()){
//   text +=x
// }
// text = ""
//  const fruits = new Map ([
//   ["apples",500],
//   ["oranges",600],
//   ["banana",600]])
// const fruits2 = new Map()
// text = fruits2.set("oranges",200)
// text = fruits.get("apples")
// text= fruits.size
// text = fruits.delete("apples")
// text = fruits.has("apples")
// let text = "";
// for (const x of fruits.entries()) {
// text += x;
// }
// text = Number("")
// text = "3.14"
// text = Number(Math.PI)
// text = Number(parseFloat(Math.PI))
// x = "red"
// try{
//   if(isNaN(x)) throw "not a number";
// }
// catch(err){
//   document.getElementById("demo").innerHTML = err.message;
// }
// finally {
//   document.getElementById("demo").value = "done";
// }

// text = ( ) => "Hello " + val;
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age(x) {
//     return x - this.year;
//   }
//  }
//  const date = new Date();
//  let year = date.getFullYear();
//  const myCar = new Car("Ford", 2020);
//  document.getElementById("demo").innerHTML=
//  "My car is " + myCar.age(year) + " years old.";
// export const name = "Jesse";
//  export const age = 40;
// const name = "Jesse";
// const age = 40;
// export {name, age};
// document.getElementById("demo").innerHTML = text;  

