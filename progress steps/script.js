let step = 0;

function stepCount(num,limit) {
    step += num;
    if(step < 0){
        step = 0;
    }
    else {
        if(step >= limit){
            step = limit - 1
        }
    }
    progress(step);
}

function progress(step) {
    let progress_bar = document.getElementsByClassName('progress__fill');
    let progress_step = document.getElementsByClassName('progress__step');
    
    for(let i=0; i<progress_bar.length; i++){
        progress_bar[i].className = progress_bar[i].className.replace(' fill','');
        progress_step[i+1].className = progress_step[i+1].className.replace(' step__border','');
    }
    for(let i=0; i<step; i++){
        progress_bar[i].className = progress_bar[i].className + ' fill'
        progress_step[i+1].className = progress_step[i+1].className + ' step__border'
    }
}