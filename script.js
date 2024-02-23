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

    if(tempvalue >= 27) {
        if (windvalue >= 252){
            videosrc = 'Scenario_6.mp4';
        } else if (windvalue >= 209){
            videosrc = 'Scenario_5.mp4';
        } else if (windvalue >= 178){
            videosrc = 'Scenario_5.mp4';
        } else if (windvalue >= 154){
            videosrc = 'Scenario_4.mp4';
        } else if (windvalue >= 119){
            videosrc = 'Scenario_4.mp4';
        } else{
            videosrc = 'Scenario_3.mp4';
        }
    } else if (windvalue >= 119){
        videosrc = 'Scenario_2.mp4';
    } else {
        videosrc = 'Scenario_1.mp4';

    }
    video.src = videosrc;
}

function togglePlay() {
    video.style.display = 'block'
    video.play();
    playButton.disabled = true;
    playButton.style.backgroundColor = 'rgb(163, 163, 163)';
    slider1.disabled = true;
    slider2.disabled = true;
}
function restart() {
    video.style.display = 'none'
    playButton.disabled = false;
    playButton.style.backgroundColor = 'white';
    slider1.disabled = false;
    slider2.disabled = false;
}