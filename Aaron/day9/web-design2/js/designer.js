window.addEventListener('load', function(){

    
    localStorage.setItem('headerText', 'I am from local storage')
   

    // localStorage.setItem('header', JSON.stringify(obj));
    const lsObj = localStorage.getItem('header');

    console.log(lsObj);

    const element = document.createElement('div');
    document.body.prepend(element);
    element.innerText = localStorage.getItem('headerText');
    element.style.color = this.localStorage.getItem('headerColor');
    element.style.backgroundColor = localStorage.getItem('headerBackgroundColor');

    // console.log(obj.header);
    // console.log(obj.header.title);


    const input1 = document.createElement('input');
    document.body.prepend(input1);
    input1.placeholder = 'Change Color';

    input1.addEventListener('input', function(e){
        console.log(e);
        element.style.color = e.target.value;
        localStorage.setItem('headerColor', event.target.value);
    })

    const input2 = document.createElement('input');
    document.body.appendChild(input2);
    input2.placeholder = 'Change Background Color';

    input2.addEventListener('input', function(e){
        element.style.backgroundColor = e.target.value;
        localStorage.setItem('headerBackgroundColor', event.target.value);
        
    });

    const url = 'https://jsonplaceholder.typicode.com/todos';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
            console.log(xhr.readyState);
            const response = JSON.parse(xhr.responseText);
            
            const completed = response.filter(todo => {
                return todo.completed
            })
            console.log('completed',completed);

            const incomplete = response.filter(todo => {
                return !todo.completed;
            })
            console.log('not completed', incomplete);
            
        }
    };
    xhr.send();

    const request = new Request(url);
    const URL = url;
    const method = request.method;

    
});