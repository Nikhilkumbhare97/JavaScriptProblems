var head = 1
var tail = 1
while ((head <= 11) && (tail <= 11)) {
    var val = Math.floor(Math.random() * 2)
    if (val == 0) {
        head++
    } else {
        tail++
    }
}
console.log("Total Heads: " + (head - 1) + " Total Tails: " + (tail - 1))
if (head == 12) {
    console.log("Head Win 11 Times")
} else {
    console.log("Tail Win 11 Times")
}