let time = 0;
let timer;
let run = false;

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!run) {
        time = parseInt(document.getElementById("timeInput").value) || time;
        if (time > 0) {
            run = true;
            timer = setInterval(updateTime, 1000);
        }
    }
}

function pauseTimer() {
    if (run) {
        clearInterval(timer);
        run = false;
    }
}

function updateTime() {
    if (time > 0) {
        time--;
        document.getElementById("display").innerText = formatTime(time);
    } else {
        clearInterval(timer);
        run = false;
    }
}

function increaseTime() {
    time++;
    document.getElementById("timeInput").value = time;
    document.getElementById("display").innerText = formatTime(time);
}

function reduceTime() {
    if (time > 1) {
        time--;
    } else {
        time = 0;
    }
    document.getElementById("timeInput").value = time;
    document.getElementById("display").innerText = formatTime(time);
}