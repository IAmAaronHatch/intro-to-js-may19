window.addEventListener(`load`, setup)

const width = 580;
const height = 360;
const columns = 8;
const rows = 3;

const people = [
    [`alex`], [`alfred`], ['anita', 'girl'], ['anne', 'girl'], ['bernard', 'hat'], ['bill'], ['charles'],
    ['claire', 'girl', 'hat'], ['david'], ['eric', 'hat'], ['frans'], ['george', 'hat'], ['herman'], ['joe'], ['maria', 'girl', 'hat'], ['max'], ['paul'], ['peter'], ['phillip'], ['richard'], ['robert'], ['sam'], ['susan', 'girl'], ['tom']
];


function setup() {
    const container = document.createElement(`div`);
    container.classList.add(`container`);
    document.body.appendChild(container);


    for (let i = 0; i < columns * rows; i++) {
        const x = (width / columns + 7) * (i % 8);

        const row = Math.floor(i / columns);

        const y = (height / rows) * row;
        const card = createCard(x + 55, y + 35);
        container.appendChild(card);

        card.innerText = people[i][0];
    }
};

function createCard(x, y) {
    const card = document.createElement(`div`);
    card.classList.add(`char`);
    card.style.width = (width / columns) + `px`;
    card.style.height = (height / rows) + `px`;
    card.style.background = `url("char.png") no-repeat -${x}px -${y}px`;

    return card;
}












