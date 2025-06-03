const cards = document.querySelector('#spotlight');

async function getMemberData() {
    cards.classList.add("grid");
    const response = await fetch('data/members.json');
    const data = await response.json();
    /*filterGS(data.members);*/
    displayMembers(data.members);
}

getMemberData();


/*const filterGS = (filtered) => {
    let filt = [];
    filtered.forEach(element => {
        if (element.level === 3) {
            filt.push(element);
        }
        if (element.level === 2) {
            filt.push(element);
        }
    });
}*/

const displayMembers = (membersIn) => {

    let child = cards.querySelectorAll('section');
    let numchild = child.length;


    membersIn.sort(function () { return Math.random() - 0.5 });
    membersIn.forEach((members) => {
        if (numchild < 3) {
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

            if (getMembership(members.level) === 'Gold') {
                cards.appendChild(card);
                numchild = numchild + 1;
            }

            if (getMembership(members.level) === 'Silver') {
                cards.appendChild(card);
                numchild = numchild + 1;
            }

        }

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
const display = document.querySelector("#spotlight");

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