//Types of Triangle
let triangle =("side1", "side2", "side3")
let side1 = 60
let side2 = 30
let side3 = 40

 if(side1===side2 && side2===side3)
 {
    console.log("This is an equilateral triangle")
 }
 else if (side1===side2 || side1===side3  || side2===side3)   
 {
    console.log("This is an iscoceles triangle")
 }
 else
 {
    console.log("This is a scalene triangle")
 }
 