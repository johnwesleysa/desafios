const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');
const body = document.getElementById ('body');

function lightOn () {
    lamp.src = './img/ligada.png'
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
}

function lightOff () {
    lamp.src = './img/desligada.png'
    body.style.backgroundColor = 'black'
    body.style.color = 'white'
}

function broken () {
    lamp.src = './img/quebrada.png'
    body.style.backgroundColor = 'black'
    body.style.color = 'white'
}

turnOn.addEventListener ('click', lightOn);
turnOff.addEventListener ('click', lightOff);
lamp.addEventListener ('click', broken);
