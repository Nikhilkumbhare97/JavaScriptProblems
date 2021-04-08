// let num1 = Math.floor(Math.random() * 900 + 100);
// console.log("Num1 : " + num1)
// let num2 = Math.floor(Math.random() * 900 + 100);
// console.log("Num2 : " + num2)
// let num3 = Math.floor(Math.random() * 900 + 100);
// console.log("Num3 : " + num3)
// let num4 = Math.floor(Math.random() * 900 + 100);
// console.log("Num4 : " + num4)
// let num5 = Math.floor(Math.random() * 900 + 100);
// console.log("Num5 : " + num5)

var max = 0, min = 999;

for (count = 1; count <= 5; count++) {
    num = Math.floor(Math.random() * 900 + 100);
    console.log("Num" + count + " is: " + num)
    if (num > max) {
        max = num;
    }
    if (num < min) {
        min = num;
    }
}

// let max = Math.max(num)
// let min = Math.min(num)
console.log("Max Num is: " +max)
console.log("Min Num is: " +min)
