import React from 'react'

function ProjectItem({project, onDelete}) {
  return (
    <li>
        <div className='flex'>
            <div className='w-2/3' >
                {project.title} &nbsp; &nbsp; {project.category}
            </div>
            <div className='w-1/3 mx-1' >
                <a onClick={()=>onDelete(project.id)} href="#">X</a>
            </div>
        </div>
    </li>
  )
}

export default ProjectItem