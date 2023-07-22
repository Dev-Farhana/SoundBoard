const sounds = [ "Applause", "Party-horn", "Boo", "Coughing", "Gasp", "GunShoot", "Tada", "Rain", "Victory", "Thankyou","LaughingTeenager", "Wrong", "No", "Laugh", "Whistle", "TerrorEffects", "MonkeyApplause" ];

sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopsSongs()

        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
})

function stopsSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}


