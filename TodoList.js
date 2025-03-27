let storeArray = JSON.parse(localStorage.getItem('store'));
let todoList = storeArray || [];

renderTool();

function renderTool() {
        let todoListHTML = '';

        todoList.forEach(function(todoObject, index){
            const {name, dueDate} = todoObject;

            const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick= "
            todoList.splice(${index},1);
            renderTool();
            " class= "delete-button">Delete</button>
            `;
            
            todoListHTML += html;
        });

        /*for (let i = 0; i < todoList.length; i++){
            const todoObject = todoList[i];
            const {name, dueDate} = todoObject;

            const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick= "
            todoList.splice(${i},1);
            renderTool();
            //localStorage.removeItem('store');
            //storeArray.splice(${i}, 1);
            " class= "delete-button">Delete</button>
            `;
            
            todoListHTML += html;
        }*/
        
        document.querySelector('.js-div').innerHTML = todoListHTML;
//JSON.parse(localStorage.getItem('store'));
localStorage.setItem('store', JSON.stringify(todoList));
};


function addTodo() {
        const inputValue = document.querySelector('.js-input1');
        const name = inputValue.value;
        const dateInput = document.querySelector('.js-date');
        const dueDate = dateInput.value;
        todoList.push({
                name,
                dueDate
        });
        console.log(todoList);
        inputValue.value = '';
        //JSON.parse(localStorage.getItem('store'));
        //localStorage.setItem('store', JSON.stringify(todoList));
        renderTool();
}