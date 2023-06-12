import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

function AddProject({addProjectProp}) {

    const [category, setCategory] = useState('Front-End')
    const [title, setTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        let newProject = {
            id: uuidv4(),
            category,
            title
        }

        addProjectProp(newProject)
    }

  return (
    <>
    
<div className="w-full max-w-xs p-2">

<form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

  <div class="inline-block relative w-64">
    <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-2" value={category} onChange={e=>setCategory(e.target.value)}>
        <option value='Front-End'>Front-End</option>
        <option value='Back-End'>Back-End</option>
    </select>

    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
  </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="title">
        Title
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={title} onChange={e=>setTitle(e.target.value)} id="title" type="text" placeholder="Title" />
    </div>
    
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Submit
      </button>
    </div>
    
</form>

</div>

    </>
  )
}

export default AddProject