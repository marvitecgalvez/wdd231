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
        let name = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let web = document.createElement('p');
        let logo = document.createElement('img');
        let level = document.createElement('p');
        let since = document.createElement('p');

        name.textContent = `${members.name}`;
        address.innerHTML = `Address: ${members.address}`;
        phone.innerHTML = `Place of Birth: ${members.phone}`;
        web.innerHTML = `${members.url}`;
        portrait.setAttribute('src', members.imageurl);
        portrait.setAttribute('alt', `Portrait of ${members.name} ${members.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', 'auto');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}