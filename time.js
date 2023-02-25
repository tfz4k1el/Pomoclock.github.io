function updateClock() {
    //assigning hours, mins and secs to variables
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    
    
    //padding the seconds and minutes with 0 in the beggining
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
    
    //putting everything in a string
    var timeString = ( currentHours + ":" + currentMinutes + ":" + currentSeconds);
    
    //update the element is html
    document.getElementById("clockMain").innerHTML = timeString;
}
//  call the function in every one second
setInterval(updateClock,1000);


//countdown

let workTitle = document.getElementById('work')
let breakTitle = document.getElementById('break')

let workTime = 25;
let breakTime = 5;

let seconds = "00"

window.onload = () =>{
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;
    
    workTitle.classList.add('active');
    
}

function start() {
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";
    
    seconds = 59;
    
    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;
    
    breakCount = 0;
    
    
    let timerFunction = () => {
        
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;
        seconds = seconds - 1;
        if(seconds< 10 && seconds >= 1){
            seconds = "0" + seconds;
        }
        if(seconds===0){
            workMinutes = workMinutes - 1;
            
            if(workMinutes === -1){
                if (breakCount %2 == 0){
                    workMinutes = breakMinutes;
                    breakCount++
                    
                    workTitle.classList.remove('active')
                    breakTitle.classList.add('active');
                }else{
                    workMinutes = workTime;
                    breakCount++
                }
            }
            seconds = 59
        }
        function checkType(variable) {
            return typeof variable;
        }
        if(workMinutes <10 && workMinutes > 0 && checkType(workMinutes) != "string"){
            workMinutes = "0" + workMinutes;
        }
    }
    intervalID = setInterval(timerFunction,1000);
}
function reset() {
    document.getElementById("minutes").innerHTML= 25;
    document.getElementById("seconds").innerHTML = "00";
    clearInterval(intervalID);
    document.getElementById('start').style.display = "block";
    document.getElementById('reset').style.display = "none";
}

function fullScreen(){
    if(document.fullscreenElement){
        document.exitFullscreen();
        document.getElementById('contract').style.display = "none"
        document.getElementById('expand').style.display = "block"
    } else{
        document.documentElement.requestFullscreen();
        document.getElementById('expand').style.display = "none"
        document.getElementById('contract').style.display = "block"
    }
}

function hidePomo() {
    document.getElementById('pomo').style.left = "-400px"
    document.getElementById('showBtn').style.opacity = "1"
}
function showPomo() {
    document.getElementById('pomo').style.left = "10px"
    document.getElementById('showBtn').style.opacity = "0"
}