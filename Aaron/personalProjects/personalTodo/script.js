const body = document.body;

const create = (type, parent, text) => {
    let el = document.createElement(type);
    parent.appendChild(el);

    if (text) {
        el.innerText = text;
    } return el;
}   

const input = create(`input`, body);
input.placeholder = `Enter Tasks Here`;
const submitBtn = create(`button`, body, `Submit`);
const list = create(`ul`, body);
list.classList.add(`main-ul`);

const strikeThrough = (el, strike) => {
    // strike = !strike;
    
    if (!strike) {
        el.classList.remove(`finished`);                
    } else if (strike){
        el.classList.add(`finished`);        
    }
}  

const newTodo = () => {
    let value = input.value;

    if (value) {
        let listItem = create('li', list, value);
        listItem.classList.add('item')
        
        input.value = ``;

        let strike= false;

        listItem.addEventListener(`click`, function(){
            strike = !strike;            
            strikeThrough(listItem, strike);
            
        })
    };
}

 


submitBtn.addEventListener(`click`, newTodo);
