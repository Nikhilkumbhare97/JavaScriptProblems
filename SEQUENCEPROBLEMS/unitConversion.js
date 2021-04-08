console.log("Inches To Ft Conversion")
const FEET=1
const INCH=12  // one FEET equal to 12 inches
var inches=42
var feets=inches*FEET/INCH
console.log(inches+" inches into feets is equal to : "+feets)

console.log("Square feets To Square Meters Conversion")
var length = 60
var breadth = 40
const CONV_FM=0.092903 // one squarefeet to one square meters
var area = length*breadth
console.log(area+" squarefoot area into sqauremeters is equal to : "+(area*CONV_FM))

console.log("Area of 25 such plots in Acres")
var noOfPlots =25
var totalArea = noOfPlots*area
const CONV_AC= 2.2957e-5 // sqaurefoots to acres conversion
console.log("Total Area is: "+totalArea+" squarefoot into acres is equal to : "+(totalArea*CONV_AC))