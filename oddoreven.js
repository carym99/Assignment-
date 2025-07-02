//Odd or Even
let x = 101
if (x%2===0) {
    console.log("This is an even number")  
}
else
{
console.log("This is an odd number")
}

//Types of Triangle
let triangle =("side1", "side2", "side3")
let side1 = 60
let side2 = 50
let side3 = 60
 if(side1===side2===side3)
 {
    console.log("This is an equilateral triangle")
 }
 else if (
         (side1===side2 && side1 !==side3)||
         (side2===side3 && side2 !==side1)||
         (side3===side1 && side3 !==side2)
         )
 {
    console.log("This is an iscoceles triangle")
 }
 else
 {
    console.log("This is a scalene triangle")
 }