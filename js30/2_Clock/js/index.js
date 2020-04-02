const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

// Clock without using Date object

// let seconds = 6;
// let minutes = 6;
// let hour = 30;

// function time(element, time, interval) {
//     setInterval(() => {
//         element.style.transform = `rotate(${90+time}deg)`
//         if (time === 360) time === 0;
//         time += time
//     }, interval);
// }
// time(secondHand, seconds, 1000);
// time(minHand, minutes, 60000);
// time(hourHand, hour, 3600000);


// Clock with Date object

function setTime() {
    const time = new Date();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hour = time.getHours();
    secondHand.style.transform = `rotate(${seconds*6}deg)`;
    minHand.style.transform = `rotate(${minutes*6+90}deg)`;
    hourHand.style.transform = `rotate(${hour*30+90}deg)`;

}

setInterval(setTime, 1000)