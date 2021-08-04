// get all elements 

const player = document.querySelector(".player");
const video = document.querySelector(".player__video");

function playVideo(){
    video.play()
}

player.addEventListener('click', playVideo)