const openTutoring = document.querySelector("#open-tutoring");
const modal = document.querySelector("#modal-tutoring");
const closeTutoring = document.querySelector("#close-tutoring");

if (openTutoring && modal) {
    openTutoring.addEventListener("click", () => {
        modal.showModal();
    });
}

if (closeTutoring && modal) {
    closeTutoring.addEventListener("click", () => {
        modal.close();
    });
}