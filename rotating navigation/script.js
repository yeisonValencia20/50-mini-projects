function rotate() {
    document.getElementsByClassName('container')[0].classList.toggle('rotate')

    let elements = document.getElementsByClassName('navlink');
    for(let i=0; i<elements.length; i++){
        
        elements[i].classList.toggle('show');
    } 

    document.getElementsByClassName('nav-rotation-buton')[0].classList.toggle('rotate-90')
}
