// ASYNC FUNTION

const url = "data/members.json";

const cards = document.querySelector(".grid");

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
}

const displayMembers = (members) => {

    members.forEach(member => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let image = document.createElement("img");
        let businessTag = document.createElement("span");
        let email = document.createElement("p");
        let phoneNumber = document.createElement("p");
        let websiteUrl = document.createElement("p");
        let membershipLevel = document.createElement("p");

        name.textContent = `${member["companyName"]}`;
        image.textContent = `${member["imageFileName"]}`;
        businessTag.textContent = `${member["businessTag"]}`;
        phoneNumber.textContent = `${member["phoneNumber"]}`;
        email.textContent = `${member["email"]}`;
        websiteUrl.textContent = `${member["websiteUrl"]}`;
        membershipLevel.textContent = `${member["membershipLevel"]}`;

        image.setAttribute("src", `images/${member["imageFileName"]}`);
        image.setAttribute("alt", `Logo image of ${member["name"]}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "50");
        image.setAttribute("height", "50")
        websiteUrl.setAttribute("href", `${member["websiteUrl"]}`);

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(businessTagline);
        card.appendChild(email);
        card.appendChild(phoneNumber);
        card.appendChild(websiteUrl);
        card.appendChild(membershipLevel);
        cards.appendChild(card);
    });
}

getMembersData();

// MENU

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showlist);

function showlist() {
    display.classList.add("list");
    display.classList.remove("grid");
}
