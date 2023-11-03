const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');
const texts = Array.from(document.getElementsByTagName('span'));
let secondDegree, minuteDegree, hourDegree;

function update() {
    let hours = new Date().getHours(); let minutes = new Date().getMinutes(); let seconds = new Date().getSeconds();
    hours = (hours > 12) ? (hours - 12) : hours;
    secondDegree = seconds * 6; minuteDegree = minutes * 6; hourDegree = hours * 30 + minutes * 0.5;
    textGlow(secondDegree, 'red');
    textGlow(minuteDegree, 'blue');
    textGlow(hourDegree, 'green');
    secondHand.style.transform = `translate(-50%,15%) rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `translate(-50%,15%) rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `translate(-50%,15%) rotate(${hourDegree}deg)`;
}

setInterval(update, 1000);

function textGlow(degree, color) {
    for (let i = 0; i < 12; i++) {
        if (i * 30 !== secondDegree && i * 30 !== minuteDegree && i * 30 !== hourDegree) {
            texts[i].style.color = '';
            texts[i].style.textShadow = '';
        }
        if (i * 30 === degree) {
            texts[i].style.color = color;
            texts[i].style.textShadow = '0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000';
        }
    }
}