var timer = 60;
var score=0;
var hitrn=0;

// inventbubbling=jispe click kroge wo element par event raise hoga ,
// aur event listner na milne par event ke parent par listner dundheda vaha 
// a bhi na milne event parent ke parent par listner dhundega 



function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function getNewHit(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
function makeBubble()
{
    var clutter = "";
for(var i=1; i<261;i++){
    var rn = Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${rn}</div>`;
    
               
}
document.querySelector("#pbtm").innerHTML=clutter;
}
function runTimer(){
   var timerr= setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;

        }
        else{

            clearInterval(timerr);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }
        
    },1000);

}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickNumber=Number(dets.target.textContent);
    if(clickNumber==hitrn){
        increasescore();
        makeBubble();
        getNewHit();
    }

    
});


runTimer();
makeBubble();
getNewHit();
