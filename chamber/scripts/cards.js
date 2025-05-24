//const url = 'https://marvitecgalvez.github.io/wdd231/chamber/data/members.json';

const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((members) => {
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
        address.innerHTML = `Address: ${members.address}`;
        phone.innerHTML = `Phone: ${members.phone}`;
        web.innerHTML = `<a href="${members.url}">Visit Website</a>`;
        //level.innerHTML = `Membership: ${getMembership(members.level)}`;
        since.innerHTML = `Member since: ${members.year}`;

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

function getMembership(level) {
    let nivel = 'Member';
    if (level.level === 3) {
        nivel = 'Gold';
    }
    if (level.level === 2) {
        nivel = 'Silver';
    }
}