

window.onload=startTime();

let person=prompt("Adınızı girin:")
let personName= document.querySelector("#name");

personName.innerHTML=`Merhaba, ${person} ${personName.innerHTML} Hoşgeldin!`

function startTime()
{
    var today=new Date();
    var hours=today.getHours();
    var minutes=today.getMinutes();
    var seconds=today.getSeconds();

    var days=['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
    var day=days[today.getDay()];

    hours=checkTime(hours);
    minutes=checkTime(minutes);
    seconds=checkTime(seconds);

let clock=document.querySelector("#clock");
clock.innerHTML= `${hours} :  ${minutes} : ${seconds} ${day} `

var t;
t=setTimeout('startTime()',1000);
}

function checkTime(i) {
    if(i<10){
        i="0"+i;
    }
    return i;
}





//let hour=Date.prototype.getTime();
//let day=Date.prototype.getDay();