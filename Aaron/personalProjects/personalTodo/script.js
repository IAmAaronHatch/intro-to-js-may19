const body = document.body;

const create = (type, parent, text) => {
    let el = document.createElement(type);
    parent.appendChild(el);

    if (text) {
        el.innerText = text;
    } return el;
}   

const input = create(`input`, body);
const submitBtn = create(`button`, body, `Submit`);
const list = create(`ul`, body);

const newTodo = () => {
    let value = input.value;

    if (value) {
        let listItem = create('li', list, value);
        
        input.value = ``;

        listItem.addEventListener(`click`, function(){
            listItem.classList.add(`finished`);
        })
    };
}

submitBtn.addEventListener(`click`, newTodo);
