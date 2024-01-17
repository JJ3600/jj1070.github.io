var video = document.getElementById('video-player');
var playButton = document.getElementById('play-button');
const slider1 = document.getElementById('tempslider');
const slider2 = document.getElementById('windslider');

slider1.addEventListener('input', updateVideo);
slider2.addEventListener('input', updateVideo);

function updateVideo() {
    var tempvalue = slider1.value;
    var windvalue = slider2.value;

    let videosrc;

    if(tempvalue >= 27 && windvalue >= 119) {
        if (windvalue >= 252){
            videosrc = 'vid2.mp4';
            console.log("vid6");
        } else if (windvalue >= 209){
            videosrc = 'vid.mp4';
            console.log("vid5");
        } else if (windvalue >= 178){
            videosrc = 'vid2.mp4';
            console.log("vid4");
        } else if (windvalue >= 154){
            videosrc = 'vid.mp4';
            console.log("vid3");
        } else{
            videosrc = 'vid2.mp4';
            console.log("vid2");
        }
    } else{
        videosrc = 'vid.mp4';
        console.log("vid1");
    }
    video.src = videosrc;

}

function togglePlay() {
    video.style.display = 'block'
    video.play();
    playButton.disabled = true;
    slider1.disabled = true;
    slider2.disabled = true;
/*     if (video.paused) {
        video.style.display = 'block';
        video.play();
        playButton.textContent = 'Pause';
    } else {
        video.pause();
        playButton.textContent = 'Play';
    } */
}
function restart() {
    video.style.display = 'none'
    playButton.disabled = false;
    slider1.disabled = false;
    slider2.disabled = false;
}