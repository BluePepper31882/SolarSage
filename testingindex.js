
var x = 0;
var y = 0;
var z = 0; 
var counter;
var counter2;
var counter3;



counter = setInterval(addToo1, 6);
counter2 = setInterval(addToo2, 6);
counter3 = setInterval(addToo3, 1000);



checkX = setInterval(checkX, 1);
checkY = setInterval(checkY, 1);
checkZ = setInterval(checkZ, 1);

 
function checkX(){
    if(x >= 3276){
        clearInterval(counter);
        clearInterval(checkX);
    }
}


function checkY(){
    if(y >= 1478){
        clearInterval(counter2);

    }
} 






function addToo1(){
        x+=3;
        document.getElementById("demo1").innerHTML = x;
    
} 


function addToo2(){
    y+=3;
    document.getElementById("demo2").innerHTML = y;

} 


function addToo3(){
    z+=.05;
    document.getElementById("demo3").innerHTML = z.toFixed(2);

}

