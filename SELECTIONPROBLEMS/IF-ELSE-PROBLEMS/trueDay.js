var month, day;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question(`enter the Month `, value => {
    console.log(`the Month is ${value}`)
    month=value;
    readline.question(`enter the Day `, values => {
        console.log(`the Day is ${values}`)
        day=values;
        checkStatus(month, day)
        readline.close();
    })
})
function checkStatus(month, day) {
    if ((month >= 3) && (month <= 6)) {
        var dlimit = 30 + (month % 2);
        if ((day > 1) && (day <= dlimit)) {
            var combo1 = (month*100);
            var date = day*1;
            var combo = combo1+date;
            if ((combo > 320) && (combo < 620)){
                console.log("Correct Date : " +day +"/"+ month )
            }else {
                console.log("Incorrect Daate : " +day +"/"+ month )
            }
        }else {
            console.log("Incorrect Daate : " +day +"/"+ month )
        }
    }
    else {
        console.log("Incorrect Daate : " +day +"/"+ month )
    }
}