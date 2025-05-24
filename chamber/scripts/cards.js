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
        let fullname = document.createElement('h2');
        let datebirth = document.createElement('p');
        let placebirth = document.createElement('p');
        let portrait = document.createElement('img');

        fullname.textContent = `${members.name} ${members.lastname}`;
        datebirth.innerHTML = `Date of Birth: ${members.birthdate}`;
        placebirth.innerHTML = `Place of Birth: ${members.birthplace}`;
        portrait.setAttribute('src', members.imageurl);
        portrait.setAttribute('alt', `Portrait of ${members.name} ${members.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', 'auto');

        card.appendChild(fullname);
        card.appendChild(datebirth);
        card.appendChild(placebirth);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}