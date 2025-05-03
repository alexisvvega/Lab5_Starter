// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    // TODO
    const hornOption = document.getElementById('horn-select');
    const imgOption = document.querySelector('img');
    const audioOption = document.querySelector('audio');
    const audioButton = document.querySelector('button');
    const volumeSlider = document.getElementById('volume');
    const volumeImgOption = document.querySelector('#volume-controls img');

    let confetti = new JSConfetti();

    hornOption.addEventListener('change', (event) => changeImageAudio(event, imgOption, audioOption));
    audioButton.addEventListener('click', () => {audioOption.play();});

    audioButton.addEventListener('click', () => {
        const currPath = imgOption.getAttribute('src');
        if (currPath.includes('party-horn')) {
            confetti.addConfetti();
        }
    });

    volumeSlider.addEventListener('input', (event) => changeAudioImage(event, volumeImgOption, audioOption));

}

function changeImageAudio(event, imgOption, audioOption) { 
    /*
        We're using this function to modify the image and audio being selected:
            - assets/images/air-horn.svg
            - assets/images/car-horn.svg
            - assets/images/party-horn.svg
            - assets/audio/air-horn.mp3
            - assets/audio/car-horn.mp3
            - assets/audio/party-horn.mp3
    */

    const hornName = event.target.value;
    const imgPath = `assets/images/${hornName}.svg`;
    const audioPath = `assets/audio/${hornName}.mp3`;
    imgOption.setAttribute('src', imgPath);
    audioOption.setAttribute('src', audioPath);

}

function changeAudioImage(event, volumeImgOption, audioOption) {
    const volume = event.target.value;

    // changing the icon
    let volumeLevel = 0;
    if (volume == 0) {
        volumeLevel = 0;
    } else if (volume < 33) {
        volumeLevel = 1;
    } else if (volume < 67) {
        volumeLevel = 2;
    } else {
        volumeLevel = 3;
    }
    const imgPath = `assets/icons/volume-level-${volumeLevel}.svg`;
    volumeImgOption.setAttribute('src', imgPath);

    // changing the audio volume
    audioOption.volume = volume/100;
}