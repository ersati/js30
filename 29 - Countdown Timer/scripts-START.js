const timerControls = document.querySelector('.timer__controls');
const buttons = document.querySelectorAll('.timer__button');

const display = document.querySelector('.display');
const timeLeft = document.querySelector('.display__time-left');
const timeEnd = document.querySelector('.display__end-time');

let countdown
function startTime(time) {
    const now = Date.now();
    const future = now + time * 1000
    const currentTime = new Date(future)

    displayTime(time)
    countdown = setInterval(() => {
        const timeLeft = Math.round((future - Date.now()) / 1000)
        if(timeLeft < 0 ){
            clearInterval(countdown)
            return
        }
        displayTime(timeLeft)
    }, 1000);
}

const displayTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60
    timeLeft.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`

}

const collectTime = (time) => {
    const numberTime = parseInt(time)
    startTime(numberTime)
}
timerControls.addEventListener('click', (e) => collectTime(e.target.dataset.time))