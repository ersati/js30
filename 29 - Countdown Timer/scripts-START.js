const timerControls = document.querySelector('.timer__controls');
const buttons = document.querySelectorAll('.timer__button');

const display = document.querySelector('.display');
const timeLeft = document.querySelector('.display__time-left');
const timeEnd = document.querySelector('.display__end-time');

function startTime(time) {
    const timeNumber = parseInt(time)
    const now  = new Date(); 
    const future = now + timeNumber * 1000
    const currentTime = new Date(future)

    console.log(
        timeNumber, now,future, currentTime ,currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds()
    )

}
timerControls.addEventListener('click', function(e) {
    console.log(e.target.dataset.time)
    startTime(e.target.dataset.time)
})
