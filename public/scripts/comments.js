const titles1 = [
    "Superb !!!",
    "Awesome @",
    "Fantastic!"
];

const titles2 = [
    "Nice...",
    "Splendid!",
    "Wow..."
];

const titles3 = [
    "Great $$$",
    "Perfect",
    "% Sounds Great %"
];

const comments1 = [
    "This software has exceeded my expectations. You can Go for it.",
    "The user interface is so intuitive. I love using this!",
    "I can't believe I lived without this tool. Highly recommended!"
];

const comments2 = [
    "Amazing work! The team behind this software deserves praise.",
    "It's so easy to collaborate with others using this platform.",
    "I've tried other tools, but this stands out perfectly."
];

const comments3 = [
    "Incredible features! I'm discovering new things every day.",
    "The customer support is top-notch. Quick and helpful!",
    "I recommend this to everyone for a reliable software solution."
];

const timera = [
    "Last updated 3 mins ago",
    "Last updated 10 mins ago",
    "Last updated 3 days ago",
];

const timerb = [
    "Last updated 18 mins ago",
    "Last updated 2 days ago",
    "Last updated 56 mins ago",    
];

const timerc = [
    "Last updated 17 mins ago",
    "Last updated 5 days ago",
    "Last updated 23 mins ago",
];

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function getRandomTimer(array) {
    return Math.floor(Math.random() * array.length);
}

function updateContent() {
    const indexa = getRandomIndex(titles1);
    const indexb = getRandomIndex(titles2);
    const indexc = getRandomIndex(titles3);
    const index2 = getRandomIndex(comments1);
    const index3 = getRandomIndex(comments2);
    const index4 = getRandomIndex(comments3);

    const timer1 = getRandomIndex(timera);
    const timer2 = getRandomIndex(timerb);
    const timer3 = getRandomIndex(timerc);

    document.getElementById('title1').textContent = titles1[indexa];
    document.getElementById('comment1').textContent = comments1[index2];
    document.getElementById('timeraa').textContent = timera[timer1];

    document.getElementById('title2').textContent = titles2[indexb];
    document.getElementById('comment2').textContent = comments2[index3];
    document.getElementById('timerbb').textContent = timerb[timer2];


    document.getElementById('title3').textContent = titles3[indexc];
    document.getElementById('comment3').textContent = comments3[index4];
    document.getElementById('timercc').textContent = timerc[timer3];

}

function updateContentWithTimer() {
    updateContent();
    setInterval(updateContent, 5000); // Change content every 5 seconds (adjust as needed)
}

document.addEventListener('DOMContentLoaded', updateContentWithTimer);