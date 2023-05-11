
// grab dom elements

//form

let ul = document.querySelector('#appendHere')

let form = document.querySelector('#formOne')

let inputDescription = document.querySelector('#input1')

let headers = { "Content-type": "application/json; charset=UTF-8" }

// display all of the todo list items 


const initTodos = async () => {
    
    //fetch to /todos get all todos and display them

    let results = await fetch('/todos') 

    let todos = await results.json(); 

    listTodos(todos)

}

initTodo()


form.addEventListner('submit', async(e)=>{

    //prevent the default fo rthe form 
    e.preventDefault();

    // grab info out of the input field 

    //makde fetch to our routes /todos on the POST route 

    let response = await fetch('/todos', {

        method: 'POST', 
        headers: headers, 
        body: JSON.stringify({description: inputDescription.value})
    })

    let records = await response.json()

    // redisplay all of the todos

    listTodos(records)

})


ul.addEventListener('click', async (e)=>{


    // trash
        // delete todo listitem

    if(e.target.className === 'fas fa-trash'){

        let primaryKey = e.target.id;

        let result = await fetch(`/todos/${primaryKey}`, {
            method: 'DELETE', 
            headers: headers
        })

        let records = await result.json(); 

        listTodos(records)
    }

    //pencil 
        // changing state from text panel to edit panel

    if(e.target.className === 'fas fa-pencil-alt'){

        let id = e.target.id

        let ds = `default-state-${id}` // default-state-id 
        
        let es = `edit-state-${id}` // edit-state-id

        let defaultState = document.getElementById(ds)

        let editState = document.getElementById(es)

        defaultState.className = 'row pr-3 visually-hidden' 
        editState.className = 'row pr-3'
    }

    //edit 
        // make a fetch call to update current todolist item

    if(e.target.textContent ===  "Edit"){

        let id = e.target.id; 

        let editField = `update-${id}`  //udate- 

        let editDOMElement = document.getElementById(editField)

        let results = await fetch('/todos/${id}', {
            method : "PUT", 
            headers: headers, 
            body: JSON.stringify({description: editDOMElement.value})
        })

        let records = await results.json(); 

        listTodos(records)

        resetListItems(id)

    }


    //cancel
        // changing state from edit panel to text configuration

        if(e.target.textContent == "Cancel"){
            let id = e.target.id; 

            resetListItems(id)
        }
})


const resetListItems = (id) => {

    let ds = `default-sate-${id}`
    let defaultState = document.getElementId(ds); 

    defaultState.className = "row pr-3 visible"

    let es = `edit-state-${id}`

    let editState = document.getElementById(es); 

    editState.className = "row pr-3 visually-hidden"
    
}


const listTodos = (records) => {

    let htmlBlock = "" 


    records.forEach(item =>{

        htmlBlock += `
        
        <li>
        
            <div id="default-state-${item.id}" class="row pr-3">
                <div class="col-10">

                    ${item.description}
                </div>


                <div class="col-2 text-right pr-2">

                    <button class="button btn">
                        <span>
                            <i id="${item.id}" class="fas fa-pencil-alt"></i>
                        </span>
                    </button>

                    <button class="button btn">
                        <span>
                            <i id="${item.id} class="fas fa-trash"></i>
                        </span>
                    </button>

                </div>

            </div>




            <div id="edit-state-${item.id}" class="row pr-3 visually-hidden"> 
                                
                                <div class="col-10">
                            <div id="editContainer" class="input-group">
                                <div class="input-group-prepend ">
                                    <span class="input-group-text h-100">Todo</span>
                                    </div>
                            
                                   
                                <textarea name="task" id="update-${item.id}"
                                class="form-control" 
                                aria-label="With textarea"
                                placeholder="Edit a todo item...">${item.description}</textarea>
                                    <div class="input-group-append">
                                    <button class="btn btn-outline-info h-100" type="submit" id="${item.id}">Edit</button>
                                    </div>
                                    <div class="input-group-append">
                                    <button class="btn btn-outline-danger h-100" type="button" id="${item.id}">Cancel</button>
                                </div>
                            </div>

                        </div>
                        </div>

        </li>
        
        `
    })


    ul.innerHTML = htmlBlock;
    
}


