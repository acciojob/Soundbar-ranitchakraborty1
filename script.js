//your JS code here. If required.
const sounds = ['sound1', 'sound2', 'sound3', 'sound4', 'sound5']; // Replace these with actual sound file names without extension

const buttonsContainer = document.getElementById('buttons');

// Function to stop playing all sounds
function stopAllSounds() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}

// Create buttons for each sound
sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = sound;
    btn.addEventListener('click', () => {
        stopAllSounds();
        document.getElementById(sound).play();
    });
    buttonsContainer.appendChild(btn);

    // Create audio element
    const audio = document.createElement('audio');
    audio.id = sound;
    audio.src = `sounds/${sound}.mp3`; // Assuming the sound files are in .mp3 format
    document.body.appendChild(audio);
});

// Stop button functionality
document.querySelector('.stop').addEventListener('click', stopAllSounds);

