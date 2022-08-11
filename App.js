const startBtn = document.getElementById("startBtn")
const stopBtn = document.getElementById("stopBtn")
const resetBtn = document.getElementById("resetBtn")
const time = document.getElementById("time")
let seconds = 0;
let int = null;


startBtn.addEventListener("click", start)

stopBtn.addEventListener("click",stop)

resetBtn.addEventListener("click", reset)


function timer(){
    seconds++
    
    currentSeconds = seconds%60;
    currentHours = Math.floor(seconds / 3600);
    currentMins =  Math.floor((seconds - (currentHours * 3600))/60);


    if(currentSeconds<10){
        currentSeconds = "0"+currentSeconds}
    if(currentHours<10){
        currentHours = "0"+currentHours}
    if(currentMins<10){
        currentMins = "0"+currentMins}
    time.innerHTML = `${currentHours}:${currentMins}:${currentSeconds}`
        
        // function concat(x){
        //     if(x<10){x = `0+${x}`}
        //     return x
        // }

        // concat(currentSeconds);
        // concat(currentHours);
        // concat(currentMins);
}

function start(){
    if(int){
        return
    }
    int = setInterval(timer,1000)
}
function stop(){
clearInterval(int)
    int = null;
}
function reset(){
    stop();
    seconds = 0
    time.innerHTML = "00:00:00"
}