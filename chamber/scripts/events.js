const events = [
    {
        date: "05-31-2025",
        name: "Workshop: Gain the trust of your collaborators"
    },
    {
        date: "06-02-2025",
        name: "Talent Show",
    },
    {
        date: "07-06-2025",
        name: "Balance sheet presentation"
    }
]

let eventsBox = document.getElementById('eventsBox');

function createEvents(newEvents) {

    newEvents.forEach(element => {
        let eventData = document.createElement('p');

        eventData.innerHTML = `✳️${element.date} -> ${element.name}`;
        eventsBox.appendChild(eventData);
    });

};

createEvents(events);
