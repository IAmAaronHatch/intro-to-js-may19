
const body = document.body;


const create = (type, parent, text) => {
    let el = document.createElement(type);

    parent.prepend(el);

    if(text) {
        el.innerText = text;
    } return el;
}


// submit button and event listener for username
const userNameBtn = create(`button`, body, `Submit`);

// the input field for the user name
const userNameInput = create(`input`, body);

// username input placeholder
userNameInput.placeholder = `Insert Name`;


const submitName = (inputNameVal) => {
    let welcomeSign = create(`p`, body, `Welcome ${inputNameVal}`);
    welcomeSign.classList.add(`welcome`);

    userNameInput.value = ``;
};

const displayName = () => {
    let inputNameVal = userNameInput.value;

    if(inputNameVal) {
        submitName(inputNameVal);
    };
};


// document.createElement(`p`);
// body.appendChild(userName);
// userName.innerText = `Welcome ${user}`;





userNameBtn.addEventListener(`click`, displayName);

const homeBtn = create(`button`, body, `Home`);