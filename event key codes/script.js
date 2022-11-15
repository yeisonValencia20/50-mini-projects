window.onkeydown = function(event) {
    const container = document.getElementsByClassName('container')[0]

    container.innerHTML = `
    <div class="keyContainer">
        <p>event.key</p>
        <div class="keyContainer__item" id="key">${event.key === ' ' ? 'Space' : event.key}</div>
    </div>
    <div class="keyContainer">
        <p>event.keyCode</p>
        <div class="keyContainer__item" id="keyCode">${event.keyCode}</div>
    </div>
    <div class="keyContainer">
        <p>event.code</p>
        <div class="keyContainer__item" id="code">${event.code}</div>
    </div>
    `
}