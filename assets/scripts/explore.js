// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const dropdown = document.getElementById('voice-select');
    window.speechSynthesis.addEventListener('voiceschanged', () => loadSelect(dropdown));

    // checking the button and the text field
    const textBox = document.getElementById('text-to-speak');
    const playButton = document.querySelector('#explore button');

    // image
    const smilyFace = document.querySelector('#explore img');

    playButton.addEventListener('click', () => playVoice(textBox, dropdown, smilyFace));
}

function loadSelect(dropdown) {
    const voices = window.speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {

        // making each voice an option
        let text = `${voices[i].name} (${voices[i].lang})`; // <-- credits to the mozilla website
        let newOption = new Option(text, voices[i].voiceURI, false, false);

        // making the voice the default
        if (voices[i].default) {
            newOption.text += " — DEFAULT"; // <-- credits to the mozilla website 
            // newOption.defaultSelected = true;
        }

        dropdown.add(newOption);

    }

}

function playVoice(textBox, dropdown, smilyFace) {
    let text_to_speech = textBox.value.trim(); // not sure if trim is necessary here
    if (!text_to_speech) {
        return; // safety check on nothing is meant to be said
    }

    let speech = new SpeechSynthesisUtterance(text_to_speech);

    let currentURI = dropdown.value;

    for (let currVoice of window.speechSynthesis.getVoices()) {
        if (currVoice.voiceURI == currentURI) {
            speech.voice = currVoice;
            break;
        }
    }

    speech.onstart = () => {
        smilyFace.setAttribute('src', 'assets/images/smiling-open.png')
    }

    speech.onend = () => {
        smilyFace.setAttribute('src', 'assets/images/smiling.png')
    }

    window.speechSynthesis.speak(speech);

}
