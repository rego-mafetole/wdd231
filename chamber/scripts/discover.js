import { itemsOfInterest } from "../data/items.mjs";

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('#cards-container');

    gridContainer.innerHTML = '';

    const heading = document.createElement('h1');
    heading.textContent = "Discover";
    heading.classList.add('page-title');

    gridContainer.appendChild(heading);

    itemsOfInterest.forEach((item) => {
        const cardElement = document.createElement('section');
        cardElement.classList.add('card');

        const cardTitle = document.createElement('h2');
        cardTitle.textContent = item.name;

        const cardFigure = document.createElement('figure');
        const cardImage = document.createElement('img');
        cardImage.src = item.image;
        cardImage.alt = item.name;
        cardImage.width = 300;
        cardImage.height = 200;
        cardImage.loading = "lazy";
        cardFigure.appendChild(cardImage);

        const cardAddress = document.createElement('address');
        cardAddress.textContent = item.address;

        const cardDescription = document.createElement('p');
        cardDescription.textContent = item.description;

        const cardButton = document.createElement('button');
        cardButton.textContent = "Learn More";

        cardElement.appendChild(cardTitle);
        cardElement.appendChild(cardFigure);
        cardElement.appendChild(cardAddress);
        cardElement.appendChild(cardDescription);
        cardElement.appendChild(cardButton);

        gridContainer.appendChild(cardElement);
    });
});