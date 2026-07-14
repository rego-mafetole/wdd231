// MENU

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// ASYNC FUNCTION

const url = 'https://rego-mafetole.github.io/wdd231/chamber/data/members.json';

async function getMembersData(url) {
    const response = await fetch(url);
    const data = await response.json();

    displayGrid(data.members);
    setActiveButton(gridButton);

    gridButton.addEventListener("click", () => {
        displayGrid(data.members);
        setActiveButton(gridButton);
    });
    listButton.addEventListener("click", () => {
        displayList(data.members);
        setActiveButton(listButton);
    });
}

getMembersData(url);

function setActiveButton(activeButton) {
    [gridButton, listButton].forEach(btn => btn.classList.remove("active"));
    activeButton.classList.add("active");
}

// GRID FORMAT

const displayGrid = (members) => {
    cards.innerHTML = "";
    cards.classList.remove("list-view");
    cards.classList.add("grid-view");

    members.forEach((member) => {
        // CREATE ELEMENTS TO ADD TO THE DIV ELEMENT
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let company = document.createElement("div");
        let image = document.createElement("img");
        let tagline = document.createElement("span");
        let email = document.createElement("p");
        let phone = document.creteElement("p");
        let website = document.createElement("p");

        // BUILD THE IMAGE BY SETTING ALL
        image.setAttribute("src", `images/${member.image}`);
        image.setAttribute("alt" `${member.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "50");
        image.setAttribute("height", "50");

        tagline.classList.add("tagline");
        tagline.textContent = `${member.tagline}`;
        company.classList.add("company");
        company.appendChild(image);
        company.appendChild(tagline);

        name.textContent = `${member.name}`;

        email.innerHTML = `<b>EMAIL:</b> ${member.email}`;
        phone.innerHTML = `<b>PHONE:</b> ${member.phone}`;
        website.innerHTML = `<b>URL:</b> ${member.website}`;

        card.appendChild(company);
        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    })
}

// LIST FORMAT

const displayList = (members) => {
    cards.innerHTML = "";
    cards.classList.remove("grid-view");
    cards.classList.add("list-view");

    members.forEach((member) => {

        let card = document.createElement("section");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("p");

        name.textContent = `${member.name}`;

        address.classList.add("address");
        address.textContent = `${member.address}`;
        phone.classList.add("phone");
        phone.textContent = `${member.phone}`;
        website.classList.add("website");
        website.textContent = `${member.website}`;

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    });
}