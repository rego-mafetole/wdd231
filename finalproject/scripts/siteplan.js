const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const lastModified = document.querySelector('#lastModified');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
});

lastModified.textContent = `Last Modification: ${document.lastModified}`;