const audios = document.getElementsByClassName('audios');

for(let audio of audios){
    const btn = document.createElement('button');
    btn.innerText = audio.id;
    btn.classList.add('button')

    btn.addEventListener('click', ()=> {
        audioPause();
        document.getElementById(audio.id).play()
    })

    document.getElementsByClassName('buttons')[0].appendChild(btn)
}

function audioPause() {
    for(let audio of audios){
        const audioPlayed = document.getElementById(audio.id);
        audioPlayed.pause();
        audioPlayed.currentTime = 0;
    }
}