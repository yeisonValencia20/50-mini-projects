let load = 0;

let interval = setInterval(blurryEffect,30);

function blurryEffect() {
    load++;

    if(load > 99){
        clearInterval(interval)
    }

    document.getElementsByClassName('background')[0].style.filter = `blur(${1 - load/100}rem)`;
    document.getElementsByClassName('loanding')[0].style.opacity = 1 - load/100;
    document.getElementById('loanding__text').innerHTML = `${load}%`
}