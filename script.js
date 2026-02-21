const hourHand = document.querySelector('.hourHand');
const minuteHand = document.querySelector('.minuteHand');
const secondHand = document.querySelector('.secondHand');


setInterval(()=>{
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    let displayHour = hours % 12 || 12;

    console.log(`${displayHour < 10 ? "0" + displayHour : displayHour}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}` + ` ${hours >= 12 ? "PM" : "AM"}`);

    let hrotate = ((hours % 12) * 30) + (minutes * 0.5 ) + (seconds * (0.5 / 60)) - 90;
    let mrotate = (minutes * 6) + (seconds * 0.1) - 90;
    let srotate = (seconds * 6) - 90;
    hourHand.style.transform = `rotate(${hrotate}deg)`;
    minuteHand.style.transform = `rotate(${mrotate}deg)`;
    secondHand.style.transform = `rotate(${srotate}deg)`;
    
}, 1000);   