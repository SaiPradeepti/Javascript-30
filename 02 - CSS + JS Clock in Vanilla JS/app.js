
function setTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();


    let hourdeg;
    if (hours <= 12) {
        hourdeg = (360 / 12) * (hours - 3);
    }
    else {
        hourdeg = (360 / 12) * (hours - 12 - 3);
    }
    const hoursHand = document.querySelector('.hours-hand');
    hoursHand.style.transform = `rotate(${hourdeg}deg)`;


    const minutedeg = (360 / 60) * (minutes - 15);
    const minutesHand = document.querySelector('.minutes-hand');
    minutesHand.style.transform = `rotate(${minutedeg}deg)`;


    const seconddeg = (360 / 60) * (seconds - 15);
    const secondsHand = document.querySelector('.seconds-hand');
    secondsHand.style.transform = `rotate(${seconddeg}deg)`;

    setTimeout(setTime, 1000);

}
setTime();