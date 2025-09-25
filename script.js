function updateClock(){
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; // Convert to 12-hour format

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;

    animateChange("hours");
    animateChange("minutes");
    animateChange("seconds");
}

function animateChange(id) {
    let element = document.getElementById(id);
    element.classList.add("animate");
    setTimeout(() => {
        element.classList.remove("animate");
    }, 1000);
}

setInterval(updateClock, 1000);

updateClock(); // Initial call to display clock immediately