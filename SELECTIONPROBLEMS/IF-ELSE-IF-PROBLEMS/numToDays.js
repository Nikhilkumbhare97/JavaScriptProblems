function checkDay(day)
{
    if(day == 1){
        return "Monday";
    }else if(day ==  2){
        return "Tuesday";
    }else if(day == 3){
        return "Wednesday";
    }else if(day == 4){
       return "Thrusday";
    }else if(day == 5){
        return "Friday";
    }else if(day == 6){
        return "Saturday";j
    }else {
        return "Sunday";
    }
}
var digit = require("readline-sync");
var day = digit.question("Enter Day Number (1-7): ");
var word = checkDay(day)
console.log("Day in Digit: "+day+" is in Words is: "+word)