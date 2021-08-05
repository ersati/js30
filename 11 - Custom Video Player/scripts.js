// get all elements 

const player = document.querySelector(".player");
const video = document.querySelector(".player__video");
const progressTimeBar = document.querySelector('.progress__filled');
const volumeBar = document.querySelector('input[name="volume"]');
const playPauseButton = document.querySelector('.player__button');


function videoTime(){
    console.log(video.currentTime)
    let time = video.currentTime;

    let timerId = setInterval(() => console.log(video.currentTime), 1000);
}
function playVideo(){
    if(video.paused){
        video.play()
        
        videoTime();
        playPauseButton.textContent = '⏸'
    }else {
        video.pause()
        playPauseButton.textContent = '▶'
    }

    console.log(video.paused)

}

playPauseButton.addEventListener('click', playVideo);
volumeBar.addEventListener('change', () => {
    video.volume = volumeBar.value;
})