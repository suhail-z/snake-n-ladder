
function details(){
return{
score:0,
rolls:0,
status:0
}
}
var players=[];
var player=0;
var properties=['Snake','Ladder','No Play','play'];
var totplayers;

function play(){

players=[]
totplayers=parseInt(document.getElementById("totplayers").value);

if(totplayers<2 ||isNaN(totplayers)){
alert('Enter Valid Players:')
}

else{
for(let i=0;i<totplayers;i++){
players.push(details());
}
document.getElementById('entryInfo').style.display='none';
document.getElementById('stats').style.display='block';
}
}
function roll(){
document.getElementById('replay').innerHTML=``;
let dice=Math.floor(Math.random()*6+1);
let turn=Math.floor(Math.random()*4);
let current=player%totplayers;

if(players[current].status==0 && dice==1){
players[current].status=1;
}

if(players[current].status==1){
players[current].rolls++;

if(turn==0 && players[current].score<=dice){
    players[current].score=0;
}
else if(turn ==0){
    players[current].score-=dice;
}
else if(turn==1 && players[current].score+(dice*3)<=100){
    players[current].score+=dice*3;
}
else if(turn==3 && players[current].score+dice<=100){
  players[current].score+=dice;
}
}
document.getElementById("player").value=(current+1).toFixed(0);
document.getElementById("dice").value=dice.toFixed(0);
document.getElementById("score").value=players[current].score.toFixed(0);
document.getElementById("status").value=properties[turn];
document.getElementById("rolls").value=players[current].rolls;

if(players[current].score===100){
alert(`player ${current+1} Wins !\nClick OK to Play Again :)`);
players=[];
document.getElementById('entryInfo').style.display='block';
document.getElementById('stats').style.display='none';
const stats=document.querySelectorAll('.display');
stats.forEach(element => {
    element.value='';
});

}
else if(dice===6){
document.getElementById('replay').innerHTML=`player ${current+1} roll again !`
}
else{
player++;
}

}
