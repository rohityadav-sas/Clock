const texts = Array.from(document.getElementsByTagName('span'));
let secondDegree, minuteDegree, hourDegree;

function update() {
    let hours = new Date().getHours(); let minutes = new Date().getMinutes(); let seconds = new Date().getSeconds();
    hours = (hours > 12) ? (hours - 12) : hours;
    secondDegree = seconds * 6; minuteDegree = minutes * 6; hourDegree = hours * 30 + minutes * 0.5;
    textGlow();
    secondHand.style.transform = `translate(-50%,15%) rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `translate(-50%,15%) rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `translate(-50%,15%) rotate(${hourDegree}deg)`;
}
update();
setInterval(update, 1000);

function textGlow() {
    texts.forEach((e, index) => {
        for (let i = 0; i < 12; i++) {
            let isColor = (i === index) && ((i * 30 === secondDegree) || (i * 30 === minuteDegree) || (i * 30 === hourDegree));
            e.classList.toggle('shadow', isColor);
            if (i * 30 === secondDegree) { e.style.setProperty('--colour', 'red') }
            else if (i * 30 === minuteDegree) { e.style.setProperty('--colour', 'blue') }
            else if (i * 30 === hourDegree) { e.style.setProperty('--colour', 'green') };
            if (isColor) { break; }
        }
    })
}