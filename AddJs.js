let firstinputValue=document.getElementById("firstNumber");
let secondinputValue=document.getElementById("secondNumber");
let userinputValue=document.getElementById("userInput");
let ResultValue=document.getElementById("gameResult");

let SuccessMessage="Congrats";
let tryAgainMessage="Please Try Again";

function Check()
{
    let first=parseInt(firstinputValue.textContent);
    let second=parseInt(secondinputValue.textContent);
    let total=parseInt(userinputValue.value);
    
    let sum=first+second;
    if(total===sum)
    {
        ResultValue.textContent=SuccessMessage;
        ResultValue.style.backgroundColor="#028a0f";
    }
    else{
        ResultValue.textContent=tryAgainMessage;
        ResultValue.style.backgroundColor="#1e217c";
    }
    
}

function Restart()
{
    let fi=Math.random()*100;
    let sec=Math.random()*100;
    
   firstinputValue.textContent=Math.ceil(fi);
   secondinputValue.textContent=Math.ceil(sec);
}
Restart();