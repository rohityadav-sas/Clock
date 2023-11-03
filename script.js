const texts = Array.from(document.getElementsByTagName('span'));
let secondDegree, minuteDegree, hourDegree;

function update() {
    let hours = new Date().getHours(); let minutes = new Date().getMinutes(); let seconds = new Date().getSeconds();
    hours = (hours > 12) ? (hours - 12) : hours;
    [secondDegree, minuteDegree, hourDegree] = [seconds * 6, minutes * 6, hours * 30 + minutes * 0.5];
    rotateHand([secondDegree, minuteDegree, hourDegree], [secondHand, minuteHand, hourHand]); textGlow();
}
update(); setInterval(update, 1000);

function textGlow() {
    texts.forEach((e, i) => {
        let isGlow = (i * 30 === secondDegree) || (i * 30 === minuteDegree) || (i * 30 === hourDegree); e.classList.toggle('shadow', isGlow);
        if (i * 30 === secondDegree) { e.style.setProperty('--colour', 'red') }
        else if (i * 30 === minuteDegree) { e.style.setProperty('--colour', 'blue') }
        else if (i * 30 === hourDegree) { e.style.setProperty('--colour', 'green') };
    })
}
function rotateHand(degree, hand) { for (let i = 0; i < 3; i++) { hand[i].style.transform = `translate(-50%,15%) rotate(${degree[i]}deg)` }; }