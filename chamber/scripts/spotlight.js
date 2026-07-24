const spotlightContainer = document.querySelector("#member-card");
const membersUrl = "data/members.json";

async function getSpotlights() {
    const response = await fetch(membersUrl);
    const data = await response.json();

    const qualifiedMembers = data.members.filter((member) =>
        member.membership === 2 || member.membershipLevel === 3
    );

    const randomMembers = qualifiedMembers
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    displaySpotlights(randomMembers);
}

getSpotlights();

function displaySpotlights(members) {
    if (spotlightContainer) {
        spotlightContainer.innerHTML = "";

        members.forEach((member) => {
            const card = document.createElement("section");
            card.classList.add("spotlight-grid");

            const membershipLevel =
                member.membershipLevel === 3 ? "Gold Member" : "Silver Member";

            card.innerHTML = `
            <h3>${member.name}</h3>

            <img
                src="images/${member.imageFileName}"
                alt="${member.companyName} logo"
                width="50"
                height="50"
                loading="lazy"
            >

            <p>${member.address}</p>
            <p>${member.phoneNumber}</p>

            <a href="${member.websiteUrl}" target="_blank">
                Visit Website
            </a>

            <p>${membershipLevel}</p>
        `;

            spotlightContainer.appendChild(card);
        
        });
    }
}