function playSound(e) {
    const audio = document.querySelector(` audio[data-key ="${e.keyCode}"] `);
    const key = document.querySelector(` .key[data-key ="${e.keyCode}"]`)
    if (!audio) return; //stop the function
    audio.play();
    key.classList.add('playing');
    audio.currentTime = 0;
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return //skip if its not transform
    this.classList.remove('playing')
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound)
    
