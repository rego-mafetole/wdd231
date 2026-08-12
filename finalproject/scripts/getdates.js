// GET DATES AND LAST MODIFIED

document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const today = new Date();
const shortName = today.toLocaleDateString('en-Us', { weekday: 'short' });