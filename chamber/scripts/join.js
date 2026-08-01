const formLoadedTime = new Date();
const timeStamp = document.querySelector("#timeStamp");
const openNp = document.querySelector("#open-np");
const modalNp = document.querySelector("#modal-np");
const closeNp = document.querySelector("#close-np");
const openBronze = document.querySelector("#open-bronze");
const modalBronze = document.querySelector("#modal-bronze");
const closeBronze = document.querySelector("#close-bronze");
const openSilver = document.querySelector("#open-silver");
const modalSilver = document.querySelector("#modal-silver");
const closeSilver = document.querySelector("#close-silver");
const openGold = document.querySelector("#open-gold");
const modalGold = document.querySelector("#modal-gold");
const closeGold = document.querySelector("#close-gold");

// Automatically set the hidden form timestamp field
if (timeStamp) {
    timeStamp.value = formLoadedTime.toLocaleString();
}

if (openNp && modalNp) {
    openNp.addEventListener("click", () => {
        modalNp.showModal();
    });
}

if (closeNp && modalNp) {
    closeNp.addEventListener("click", () => {
        modalNp.close();
    });
}

if (openBronze && modalBronze) {
    openBronze.addEventListener("click", () => {
        modalBronze.showModal();
    });
}

if (closeBronze && modalBronze) {
    closeBronze.addEventListener("click", () => {
        modalBronze.close();
    });
}

if (openSilver && modalSilver) {
    openSilver.addEventListener("click", () => {
        modalSilver.showModal();
    });
}

if (closeSilver && modalSilver) {
    closeSilver.addEventListener("click", () => {
        modalSilver.close();
    });
}

if (openGold && modalGold) {
    openGold.addEventListener("click", () => {
        modalGold.showModal();
    });
}

if (closeGold && modalGold) {
    closeGold.addEventListener("click", () => {
        modalGold.close();
    });
}