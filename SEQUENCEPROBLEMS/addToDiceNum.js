global.sum =0;
for (count = 1; count <= 2; count++) {
    diceNum = Math.floor(Math.random() * 6 + 1);
    console.log("Dice" + count + " is: " + diceNum)
    sum += diceNum;
}
console.log("Sum of Two Dice is: "+sum)