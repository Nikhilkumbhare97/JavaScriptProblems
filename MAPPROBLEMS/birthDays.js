let individualToMonthMap = new Map();
let monthToIndividualMap = new Map();

for (i = 1; i <= 50; i++) {
    let m = (Math.floor(Math.random() * 12) + 1);
    individualToMonthMap.set(i, m);
    // console.log(i + "-" + GetMonthName(m));
}

for (i = 1; i <= 12; i++) {
    let people = new Array();
    for (let [key, value] of individualToMonthMap) {
        if (value == i)
            people.push(key);
    }
    monthToIndividualMap.set(GetMonthName(i), people);
}

function GetMonthName(m) {
    switch (m) {
        case 1: return "January";
        case 2: return "February";
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "June";
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "October";
        case 11: return "November";
        case 12: return "December";
    }
}

console.log("People born in January : " + monthToIndividualMap.get("January"));
console.log("People born in February : " + monthToIndividualMap.get("February"));
console.log("People born in March : " + monthToIndividualMap.get("March"));
console.log("People born in April : " + monthToIndividualMap.get("April"));
console.log("People born in May : " + monthToIndividualMap.get("May"));
console.log("People born in June : " + monthToIndividualMap.get("June"));
console.log("People born in July : " + monthToIndividualMap.get("July"));
console.log("People born in August : " + monthToIndividualMap.get("August"));
console.log("People born in September : " + monthToIndividualMap.get("September"));
console.log("People born in October : " + monthToIndividualMap.get("October"));
console.log("People born in November : " + monthToIndividualMap.get("November"));
console.log("People born in December : " + monthToIndividualMap.get("December"));