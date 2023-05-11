
let taskSubmit = document.querySelector('.form-control');
let submitBtn = document.querySelector('#button-addon2');
let editBtn = document.querySelector('.fa-pencil-alt');
let deleteBtn = document.querySelector('.fa-trash');

let submitForm = document.querySelector('.submit-form');


submitForm.addEventListener('Submit', async (e) => {

    e.preventDefault();

    console.log('Form submitted!');

    // make fetch call w/ payload
    let newTodo = {
        todo_item: taskSubmit.value
    }

    //reconfig fetch to accept post req & a payload
    let results = await fetch('/todos', {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(newTodo)
    })

    let todoItems = await results.json()

    console.log(todoItems);

    updateFeedback(todoItems)
})

const updateFeedback = (todoArr) => {

    console.log(todoArr);
    let htmlBlock = '';

    todoArr.forEach((item) => {
        htmlBlock +=`                <li id="${item.id}">
                            <div class="row pr-3">
                                <div class="col-10">
                                    ${item.todo_item}
                                </div>


                                <div class="col-2 text-right pr-2">

                                    <button class="button btn">
                                        <span>
                                            <i class="fas fa-pencil-alt"></i>
                                        </span>
                                    </button>

                                    <button class="button btn delete-todo" data-id="${item.id}">
                                        <span>
                                            <i class="fas fa-trash"></i>
                                        </span>
                                    </button>

                                </div>

                            </div>

                        </li>`;
    });

    let ul = document.querySelector('ul');
    ul.innerHTML += htmlBlock;

};


let deleteBtns = document.querySelectorAll('.delete-todo');

deleteBtns.forEach((btn) => {
  btn.addEventListener('click', function(event) {
    let id = this.getAttribute('data-id');
    fetch(`/todos/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          // Remove the li element from the page
          document.getElementById(id).remove();
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        console.log(data);
        // update the UI
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });
});
