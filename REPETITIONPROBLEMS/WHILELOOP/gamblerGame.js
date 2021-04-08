var money = 100
const GOAL = 200
var win = 0
var lose = 0
console.log("Intial Money is 100")
while ((money < GOAL) && (money > 0)) {
    var bet = Math.floor(Math.random() * 2)
    if (bet == 0) {
        money++
        win++
    }
    else {
        money--
        lose++
    }
}
if ((money == 200) && (money == 0)) {
    console.log("Gambler Has Won")
} else {
    console.log("Gambler Has Lose")
}
console.log("Final Money: " + money + " Win Times: " + win + " Bet Times: " +(win+lose))