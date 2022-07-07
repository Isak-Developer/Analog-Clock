//ClCK
//VARIABLE
const hourHand=document.getElementById('hour');
const minuteHand=document.getElementById('minute');
const secondHand=document.getElementById('second');

//FUNCTIONS clock

function setTime(){
    const currentDate= new Date();
    const secondRatio= currentDate.getSeconds() /60
    const minuteRatio= ( secondRatio + currentDate.getMinutes() ) /60
    const hourRatio= ( minuteRatio+ currentDate.getHours() )/12

    wareegSamee(secondHand, secondRatio)
    wareegSamee(minuteHand, minuteRatio)
    wareegSamee(hourHand, hourRatio)
} 
function wareegSamee(element,rotationRotatio){
    element.style.setProperty('--wareeg', rotationRotatio * 360);
}

setTime();
setInterval(setTime,1000);

//buttons
//variable
const btnOne= document.getElementById('button1');
const btnTwo= document.getElementById('button2');
const btnThree= document.getElementById('button3');
const btnFour= document.getElementById('button4');
const clock= document.querySelector('.clock');
const buttons= document.querySelectorAll('.button');

//changing node list to an array ---->

const buttonsAray=Array.from(buttons);
const colors = ['#4def4d','#f44e4e', '#edf0f2', ' #fdfd09'];

//Eventlistenner

buttonsAray[0]. addEventListener('click',changeToOrange);
buttonsAray[1]. addEventListener('click',changeToRed);
buttonsAray[2]. addEventListener('click',changeToGray);
buttonsAray[3]. addEventListener('click',changeToYellow);


function changeToOrange(){
    clock.style.background =colors[0]
}
function changeToRed(){
    clock.style.background =colors[1] 
}
function changeToGray(){
    clock.style.background =colors[2] 
}
function changeToYellow(){
    clock.style.background =colors[3] 
}