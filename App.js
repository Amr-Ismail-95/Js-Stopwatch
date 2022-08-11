const startBtn = document.getElementById("startBtn")
const stopBtn = document.getElementById("stopBtn")
const resetBtn = document.getElementById("resetBtn")
const time = document.getElementById("time")
let ms = 0;
let int = null;


startBtn.addEventListener("click", start)

stopBtn.addEventListener("click",stop)

resetBtn.addEventListener("click", reset)


function timer(){
    ms++
    
    currentMs = ms%100
    currentHours = Math.floor(ms / 360000)
    currentMins = Math.floor((ms -(currentHours* 360000))/6000)
    currentSeconds = Math.floor((ms - (currentHours*360000) - (currentMins*6000))/100)

    if(currentSeconds<10){
        currentSeconds = "0"+currentSeconds}
    if(currentHours<10){
        currentHours = "0"+currentHours}
    if(currentMins<10){
        currentMins = "0"+currentMins}
    if(currentMs<10){
        currentMs = "0"+currentMs}
        time.innerHTML = `${currentHours}:${currentMins}:${currentSeconds}:${currentMs}`
        
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
    int = setInterval(timer,10)
}
function stop(){
clearInterval(int)
    int = null;
}
function reset(){
    stop();
    ms = 0
    time.innerHTML = "00:00:00:00"
}