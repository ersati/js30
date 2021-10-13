// let countdown
// function startTime(time) {
//     const now = Date.now();
//     const future = now + time * 1000
//     const currentTime = new Date(future)

//     displayTime(time)
//     countdown = setInterval(() => {
//         const timeLeft = Math.round((future - Date.now()) / 1000)
//         if(timeLeft < 0 ){
//             clearInterval(countdown)
//             return
//         }
//         displayTime(timeLeft)
//     }, 1000);
// }

// const displayTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60
//     timeLeft.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`

// }

// const collectTime = (time) => {
//     const numberTime = parseInt(time)
//     startTime(numberTime)
// }
// timerControls.addEventListener('click', (e) => collectTime(e.target.dataset.time))
let countdown
const timerDisplay = document.querySelector('.display__time-left')

const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    clearInterval(countdown)
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds)
    displayEndTime(then)
    countdown = setInterval(function () {
        const secondsLeft = Math.round((then - Date.now()) / 1000)
        if (secondsLeft < 0) {
            clearInterval(countdown)
            return
        }
        displayTimeLeft(secondsLeft)
    }, 1000)
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}: ${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
    timerDisplay.textContent = display
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes()
    endTime.textContent = `Be back at ${hour} ${minutes}`
}

function startTimer() {
    const seconds = parseInt(this.dataset.time)
    timer(seconds)
}
buttons.forEach(btn => btn.addEventListener('click', startTimer))

// document.customForm.addEventListener('submit', function (e) {
//     e.preventDefault()
//     const mins = this.minutes.values;
//     console.log(mins,this)
//     timer(mins * 60);
//     this.reset()
// })

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
  });