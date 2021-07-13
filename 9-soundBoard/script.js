const sounds = ['do1', 're', 'mi', 'fa', 'sol', 'la', 'ti', 'do2','applause', 'boo']
var counter = 0;
sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSounds()
        document.getElementById(sound).play()
    })
    if (counter < 8) {
        document.getElementById('buttons1')
        .appendChild(btn)
    } else {
        document.getElementById('buttons2')
        .appendChild(btn)
    }
    counter += 1;
})

function stopSounds() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;
    })
}