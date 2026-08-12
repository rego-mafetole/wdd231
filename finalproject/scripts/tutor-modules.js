import { tutorModules } from "../data/tutor-modules.mjs";

document.addEventListener('DOMContentLoaded', () => {
    const catalogContainer = document.querySelector("#catalog-container");

    if (catalogContainer) {
        // Dynamically loop through the 15 items and generate HTML
        tutorModules.forEach(item => {
            const itemCard = document.createElement("div");
            itemCard.className = "catalog-card";

            itemCard.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Target:</strong> ${item.grade}</p>
            <p><strong>Rate:</strong> ${item.price}</p>
            <p><strong>Status:</strong> ${item.status}</p>
            `;

            catalogContainer.appendChild(itemCard);
        });
    }
    });
