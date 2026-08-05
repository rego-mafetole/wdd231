const messageContainer = document.querySelector('#visitor-message');
console.log(messageContainer);
const messagePerDay = 24 * 60 * 60 * 1000;

const currentVisitTime = Date.now();
const lastVisitTime = localStorage.getItem('last-visit-date');

let message = "";

if (!lastVisitTime) {
    message = "Welcome! Let us know if you have a questions.";
}
else {
    const timeDifference = currentVisitTime - Number(lastVisitTime);

    if (timeDifference < messagePerDay) {
        message = "Back so soon! Awesome!";
    }
    else {
        const daysAgo = Math.floor(timeDifference / messagePerDay);
        const daysWord = daysAgo === 1 ? "day" : "days";
        message = `You last visited ${daysAgo} ${daysWord} ago.`;
    }
}

if (messageContainer) {
    messageContainer.textContent = message;
}

localStorage.setItem("last-visit-date", currentVisitTime);