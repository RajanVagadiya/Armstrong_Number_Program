//let math = require('Math');

function func(){

    let number=document.getElementById("ip").value;
    let result = document.querySelector("#op");
    // alert(number);
    let length=number.length;
    // console.log(typeof(length.toString()))
    // alert(length+"is the length")

    let sum = 0;
    for(digit of number){
        sum = sum + Math.pow(digit,length);
        //alert(sum);
    }

    if(sum == number){
       // alert("YES armstrong number");
       result.innerText = "Yes! Given Value is Armstrong Number";
    }
    else{
        alert("NO Baby is is not an armstrong number")
        result.innerText = "Sorry! Given number is not Armstrong Number";
    }
}