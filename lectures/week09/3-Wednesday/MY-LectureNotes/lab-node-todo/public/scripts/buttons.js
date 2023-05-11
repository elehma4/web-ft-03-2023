
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
                                <div class="col-10 todo-text">
                                    ${item.todo_item}
                                </div>


                                <div class="col-2 text-right pr-2">

                                    <button class="button btn edit-todo data-id="${item.id}">
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



let editButtons = document.querySelectorAll('.edit-todo');

editButtons.forEach((btn) => {
    btn.addEventListener('click', function() {
        
        let id = this.getAttribute('data-id')
        let liElement = document.getElementById(id);
        // Get the original todo text from the li element
        const originalText = liElement.textContent;

        // Create the editContainer div and set its visibility to none
        let editContainer = document.createElement('div');
        editContainer.classList.add('editContainer');
        editContainer.id = 'editContainer-' + id;
        editContainer.innerHTML = `
            <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text h-100">Todo</span>
                </div>
                <textarea name="task" class="form-control edit-textarea" aria-label="With textarea" placeholder="Edit a todo item...">${originalText}</textarea>
                <div class="input-group-append">
                <button class="btn btn-outline-info h-100 edit-btn" type="submit" id="button-addon2">Edit</button>
                </div>
                <div class="input-group-append">
                <button class="btn btn-outline-danger h-100 cancel-btn" type="button" id="button-addon2">Cancel</button>
                </div>
            </div>
        `;

        // Hide the original li element and show the editContainer
        liElement.style.display = 'none';
        liElement.insertAdjacentElement('afterend', editContainer);
        // inserts the editContainer element as the next sibling of the liElement (reference element) inserting the editContainer element after the liElement in the DOM structure.

        let cancelBtn = editContainer.querySelector('.cancel-btn');
        let editBtn = editContainer.querySelector('.edit-btn');
        let textarea = editContainer.querySelector('.edit-textarea');

        cancelBtn.addEventListener('click', (e) => {
            // Remove the editContainer and show the original li element
            editContainer.remove();
            liElement.style.display = 'list-item';
        });

        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let newText = textarea.value.trim();//rids of white space

            if (newText !== '') {
              // Update the li element with the new text
              liElement.textContent = newText;
              
              // Remove the editContainer and show the updated li element
              editContainer.remove();
              liElement.style.display = 'list-item';
      
              // Update the database with the new text
              fetch(`/todos/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ todo_item: newText })
              })
              .then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json()
              })
              .then(data => {
                console.log(data);
              })
              .catch(error => {
                console.error('Error updating todo:', error);
              });
            }
          });
    });
});


