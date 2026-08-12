document.addEventListener("DOMContentLoaded", () => {
    const formLoadedTime = new Date();
    const timeStamp = document.querySelector("#timeStamp");

    if (timeStamp) {
        timeStamp.value = formLoadedTime.toLocaleString();
    }
});
