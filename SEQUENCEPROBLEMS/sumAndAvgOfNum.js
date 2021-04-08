var sum =0;
var count = 0;
for (count = 1; count <= 5; count++) {
    num = Math.floor(Math.random() * 90 + 10);
    console.log("Number" + count + " is: " + num)
    sum += num;
}
count=count-1;
console.log("Sum of Numbers is: "+sum)
console.log("Avg of Numbers is: "+sum/count)