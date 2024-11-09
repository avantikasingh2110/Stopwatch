let stopwatch = document.getElementById("stopwatch");
let start_btn = document.getElementById("start_btn");
let stop_btn = document.getElementById("stop_btn");
let reset_btn = document.getElementById("reset_btn");

let hour = 0;
let minute = 0;
let second = 0;
let milisecond = 0;
let timeInterval;
let isRunning = false;

function updateStopwatch(){
    if(!isRunning){
        isRunning = true;
        timeInterval = setInterval(()=>{
            milisecond++;
    
            if(milisecond === 100){
                milisecond = 0;
                second++;
            }
            if(second === 60){
                second = 0;
                minute++;
            }
            if(minute === 60){
                minute = 0;
                hour++;
            }
    
            stopwatch.innerHTML = `${hour}:${minute}:${second}:${milisecond}`;
            
        },10)
    }
}

function stopTime(){
    isRunning = false;
    clearInterval(timeInterval)
}

function resetTime(){
    isRunning = false;
    clearInterval(timeInterval);
    stopwatch.innerHTML = `00:00:00:00`;
}


start_btn.addEventListener("click", updateStopwatch)
stop_btn.addEventListener("click", stopTime)
reset_btn.addEventListener("click", resetTime)