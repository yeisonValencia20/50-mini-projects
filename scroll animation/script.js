
const contents = document.getElementsByClassName('content');

window.addEventListener('scroll', checkContent);

checkContent();

function checkContent(){
    const triggerBottom = window.innerHeight / 5 * 4

    for(let i=0; i<contents.length; i++){
        const contentTop = contents[i].getBoundingClientRect().top;

        if(contentTop < triggerBottom){
            contents[i].classList.add('show');
        }
        else {
            contents[i].classList.remove('show');
        }
    }
}
