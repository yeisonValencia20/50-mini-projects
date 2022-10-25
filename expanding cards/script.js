function minimized(e) {
    let elements = document.getElementsByClassName('card');
    for( let i=0; i<elements.length; i++ ){
        if(!elements[i].className.includes('card--minimized')){
            elements[i].className += ' card--minimized'
        }
    }
    e.classList.toggle('card--minimized');
}