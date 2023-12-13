
var x = 0;
var timer;



timer = setInterval(addToo, 3);
checkX = setInterval(checkX, 1);

 
function checkX(){
    if(x >= 1000){
        clearInterval(timer);
        console.log("Cleared Timer");
    }
}

function addToo(){
        x+=1;
        document.getElementById("demo").innerHTML = x;
    
}

