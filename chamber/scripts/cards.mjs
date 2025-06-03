const cards = document.querySelector('#cards');

async function getMemberData() {
    cards.classList.add("grid");
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    members.filter((members) => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let web = document.createElement('p');
        let level = document.createElement('p');
        let since = document.createElement('p');


        logo.setAttribute('src', members.image);
        logo.setAttribute('alt', `logo of ${members.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');
        logo.setAttribute('height', 'auto');

        name.textContent = `${members.name}`;
        name.classList = 'cardName';

        address.innerHTML = `${members.address}`;

        phone.innerHTML = `${members.phone}`;
        phone.classList = 'ocult';

        web.innerHTML = `<a href="${members.url}">Visit Website</a>`;

        since.innerHTML = `Since: ${members.year}`;
        since.classList = 'ocult';

        level.innerHTML = `Membership: ${getMembership(members.level)}`;
        level.classList = 'ocult';


        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(web);
        card.appendChild(level);
        card.appendChild(since);


        cards.appendChild(card);
    });
}

export function getMembership(level) {
    switch (level) {
        case 3: return "Gold";
        case 2: return "Silver";
        case 1: return "Member";
    }
}

////////////////////////// LISTS ///////////////////////////////////

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
    cards.classList.remove("zebra");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
    cards.classList.add("zebra");
}

export default displayMembers;