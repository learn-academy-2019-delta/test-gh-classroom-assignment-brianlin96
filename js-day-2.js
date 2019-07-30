/*var item = 250
if (item<101){
    console.log("in budget")
}else{
    console.log("not in budget")
}*/

/*var hungry = "false"
if (hungry === 'true'){
    console.log("eat food")
}else{
    console.log("keep coding")
}*/

/*var trafficLight = 'red'
if(trafficLight == 'green'){
    console.log('GO MOFO!')
}else if(trafficLight == 'yellow'){
    console.log('Slow Down, man')
}else if(trafficLight == 'red'){
    console.log('stop')
}*/

/*var num1 = 2
var num2 = 1
if(num1>num2){
    console.log(num1 + " is the bigger number")
}else if (num1===num2){
    console.log("The numbers are equal")
}else{
    console.log(num2+ " is the bigger number")
}*/

/*var number = "2"
if (number %2 === 1){
    console.log ("odd")
}else if (number === "0"){
    console.log ("zero")
}else {
    console.log ("even")
}*/

/*var gradePercentage = 38
if(gradePercentage == 100){
    console.log('Perfect Score')
}else if(gradePercentage == 0){
    console.log('No Grade Available')
}else if(gradePercentage < 60){
    console.log('Did not Pass')
}else if(gradePercentage >= 60 && gradePercentage < 100){
    console.log('You Pass')
}*/

/*var data
if(typeof data === "number"){
    console.log(data + " is a number")
}else if(typeof data === "string"){
    console.log(data + " is a string")
}else if (typeof data === "boolean"){
    console.log(data + " is a boolean")
}else{
    console.log(data + " is undefined")
}*/
function passwordChecker(password){

if (password.length >= 12 && password.includes ("!")){
    console.log ("Thats a mighty strong password")
}else if(password.length >=8 || password.includes ("!")){
    console.log ("password is strong enough")
}else {
    console.log("password not strong enough")
}
}
passwordChecker()
