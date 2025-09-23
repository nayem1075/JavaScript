
var year = parseInt(prompt("Enter any year : "));

if((year%100!=0 && year%4==0) || year %400==0){
    document.write(year + " is a Leap Year.");
}
else{
    document.write(year + " is not Leap Year.")
}
