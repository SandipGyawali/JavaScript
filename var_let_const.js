//variables.

//const,let and var.

//primitive datatype and object.

//operators and expressions.

//conditional expression.

//Note-conditional-:logical operator operate on boolean type.

//Note : prompt function returns String type. 

//alert : function in js just gives alert msg in a website in a pop up format.

//function in javascript..
//arrow function..

//objects..
//properties function..



/*
object = something that we can touch and see. 

we know car is an object.

car has properties as well like color weight etc.

car has methods also like drive stop start brake etc.
in object this is a keyword not a variable.
 this keyword has some different meaning according to the 
 way it is used in a code.
*/
const car ={
    firstName : "sandip",
    lastName : "Gyawali",
    fullName : function (){
        return this.firstName + " "+ this.lastName;  
    }
};
//document.write(car.fullName());
let temp = 77;
let res = toCelcius(temp);
//function in javascript to find fareheit temp to celcius
function toCelcius(f){
  return (5/9)*(f-32);
}
//console.log(res);

//function youtube
let a =1;
let b = 2;
let c = 3;

function onePlusAvg(x,y){
 // console.log("done");
  return 1+(x+y)/2;
}
//console.log("The average of a and b is:",onePlusAvg(a,b));
//console.log("The average of b and c is:",onePlusAvg(b,c));
//console.log("The average of c and a is:",onePlusAvg(c,a));

//differnet way to define a fucntion known as arrow function
const sum  = (a,b) =>{   //function definition.
    
    a = Number(prompt("Enter a number:"));
    b = Number(prompt("Enter a number:"));
    return a*b;  
  }
  //let val  = sum(5,6);//function call.
 //  console.log(val);
  //console.log(typeof val);

//question related to function..
let count = 0;
function incr(i){
    //count = 0;
    count += i;
    return count;
}
let i,j;
for(i = 0;i<=4;i++){
  j = incr(i);
}
//console.log(count);





//some more next question.

let num = 7;
function r(){
 return num--;
}
for(r();r();r()){
  console.log(r());
}


























