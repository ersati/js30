// get all elements 

const player = document.querySelector(".player");
const video = document.querySelector(".player__video");
const progressTimeBar = document.querySelector('.progress__filled');
const volumeBar = document.querySelector('input[name="volume"]');
const playbackRate = document.querySelector('input[name="playbackRate"]')
const playPauseButton = document.querySelector('.player__button');

function videoTime(stop){
    console.log(video.currentTime, video.duration)
    let time = video.currentTime;
    
    let timerId = setInterval(() => {
        console.log(video.currentTime)
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

playPauseButton.addEventListener('click', playVideo);
volumeBar.addEventListener('change', () => {
    video.volume = volumeBar.value;
})

playbackRate.addEventListener('change', () => {
    video.playbackRate = playbackRate.value;
})