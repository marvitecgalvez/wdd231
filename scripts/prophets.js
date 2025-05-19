const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophets) => {
        let card = document.createElement('section');
        let fullname = document.createElement('h2');
        let datebirth = document.createElement('p');
        let placebirth = document.createElement('p');
        let portrait = document.createElement('img');

        fullname.textContent = `${prophets.name} ${prophets.lastname}`;
        datebirth.innerHTML = `Date of Birth: ${prophets.birthdate}`;
        placebirth.innerHTML = `Place of Birth: ${prophets.birthplace}`;
        portrait.setAttribute('src', prophets.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophets.name} ${prophets.lastname}`);
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

/*async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
}

getProphetData();*/