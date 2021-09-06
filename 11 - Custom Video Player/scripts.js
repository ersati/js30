// get all elements 

const player = document.querySelector(".player");
const video = document.querySelector(".player__video");
const progressTimeBar = document.querySelector('.progress__filled');
const volumeBar = document.querySelector('input[name="volume"]');
const playbackRate = document.querySelector('input[name="playbackRate"]')
const playPauseButton = document.querySelector('.player__button');
const reverseButton = document.querySelector('button[data-skip="-10"]');
const forwardButton = document.querySelector('button[data-skip="25"]');
console.log();


let curTimeBar = Math.round((video.currentTime / video.duration) * 100)

function videoTime(stop){
    console.log(video.currentTime, video.duration)
    let time = video.currentTime;
    let timerId = setInterval(() => {
        // console.log(video.currentTime)
        curTimeBar = Math.round((video.currentTime / video.duration) * 100)
        console.log(curTimeBar)
        progressTimeBar.style.flexBasis = `${curTimeBar}%`
        if(video.paused) clearInterval(timerId)
    }
    , 1000);
    
}
function playVideo(){
    if(video.paused){
        video.play()
        console.log(video.duration)
        
        videoTime();
        playPauseButton.textContent = '⏸'
    }else {
        video.pause()
        videoTime('stop')
        playPauseButton.textContent = '▶'
    }

    console.log(video.paused)

}

function reverseVideo() {
curTimeBar = curTimeBar - 10;
video.currentTime -= 10;
progressTimeBar.style.flexBasis = `${curTimeBar}%`
}

function forwardVideo() {
    curTimeBar = curTimeBar + 25;
    video.currentTime += 25;
    progressTimeBar.style.flexBasis = `${curTimeBar}%`
    }

playPauseButton.addEventListener('click', playVideo);
volumeBar.addEventListener('change', () => {
    video.volume = volumeBar.value;
})

playbackRate.addEventListener('change', () => {
    video.playbackRate = playbackRate.value;
})

reverseButton.addEventListener('click', reverseVideo)
forwardButton.addEventListener('click', forwardVideo)