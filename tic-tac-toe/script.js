

let player='X';
const wining=[
    [1,2,3],
    [1,5,9],
    [1,4,7],
    [2,5,8],
    [3,5,7],
    [3,6,9],
    [4,5,6],
    [7,8,9]
]
let xplaces=[];
let oplaces=[];

let c=0;
let myDiv1=document.getElementById("pA1");
myDiv1.addEventListener('click', function() {
    player = player==='X' ? 'O':'X';
    if(player=='X'){
        xplaces.push(1);
    }
    else{
       oplaces.push(1);
    }
    c++;
    document.getElementById("pA1").innerText=player;
    check();
});

let myDiv2=document.getElementById("pA2");
myDiv2.addEventListener('click', function() {
    player = player==='X' ? 'O':'X';
    if(player=='X'){
        xplaces.push(2);
    }
    else{
       oplaces.push(2);
    }
    c++;
    document.getElementById("pA2").innerText=player;
    check();
});

let myDiv3=document.getElementById("pA3");
myDiv3.addEventListener('click', function() {
    player = player==='X' ? 'O':'X';
    if(player=='X'){
        xplaces.push(3);
    }
    else{
       oplaces.push(3);
    }
    c++;
    document.getElementById("pA3").innerText=player;
    check();
});

let myDiv4=document.getElementById("pA4");
myDiv4.addEventListener('click', function() {
    player = player==='X' ? 'O':'X';
    if(player=='X'){
        xplaces.push(4);
    }
    else{
       oplaces.push(4);
    }
    c++;
  document.getElementById("pA4").innerText=player;
  check();
});

let myDiv5=document.getElementById("pA5");
myDiv5.addEventListener('click', function() {
    player = player==='X' ? 'O':'X';
    if(player=='X'){
        xplaces.push(5);
    }
    else{
       oplaces.push(5);
    }
    c++;
  document.getElementById("pA5").innerText=player;
  check();
});

let myDiv6=document.getElementById("pA6");
myDiv6.addEventListener('click', function() {
    player = player==='X' ? 'O':'X';
    if(player=='X'){
        xplaces.push(6);
    }
    else{
       oplaces.push(6);
    }
    c++;
  document.getElementById("pA6").innerText=player;
  check();
});

let myDiv7=document.getElementById("pA7");
myDiv7.addEventListener('click', function() {
    player = player==='X' ? 'O':'X';
    if(player=='X'){
        xplaces.push(7);
    }
    else{
       oplaces.push(7);
    }
    c++;
  document.getElementById("pA7").innerText=player;
  check();
});

let myDiv8=document.getElementById("pA8");
myDiv8.addEventListener('click', function() {
    player = player==='X' ? 'O':'X';
    if(player=='X'){
        xplaces.push(8);
    }
    else{
       oplaces.push(8);
    }
    c++;
  document.getElementById("pA8").innerText=player;
  check();
});

myDiv9=document.getElementById("pA9");
myDiv9.addEventListener('click', function() {
    player = player==='X' ? 'O':'X';
    if(player=='X'){
        xplaces.push(9);
    }
    else{
       oplaces.push(9);
    }
    c++;
  document.getElementById("pA9").innerText=player;
  check();
});
function check(){

    for(let i=0;i<wining.length;i++){
        
        if(isSubArray(xplaces,wining[i])){
            document.getElementById("message").innerHTML="X Won";

            reset();
        }
        else if(isSubArray(oplaces,wining[i])){
            document.getElementById("message").innerHTML="O Won";
            reset();
            
        }
        else if(c==9){
            document.getElementById("message").innerHTML="Draw";
            reset();
        }
    }
}



function reset(){
    oplaces=[];
    xplaces=[];
    document.getElementById("pA9").innerText="";
    document.getElementById("pA8").innerText="";
    document.getElementById("pA7").innerText="";
    document.getElementById("pA6").innerText="";
    document.getElementById("pA5").innerText="";
    document.getElementById("pA4").innerText="";
    document.getElementById("pA3").innerText="";
    document.getElementById("pA2").innerText="";
    document.getElementById("pA1").innerText="";
    c=0;
}



function isSubArray(array1, array2) {
    
    if (array2.length === 0) {
      return true;
    }
    if (array1.length < array2.length) {
      return false;
    }
    for (let i = 0; i < array2.length; i++) {
      if (!array1.includes(array2[i])) {
        return false;
      }
    }

    return true;
  }