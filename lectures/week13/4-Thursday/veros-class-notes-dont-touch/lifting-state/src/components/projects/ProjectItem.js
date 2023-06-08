import React from 'react'

const ProjectItem = ({project, onDelete}) => {
  return (
    <li>
    
        <div className="row">
            <div className="col-8">
                {project.title}  &nbsp; &nbsp; {project.category}
            </div>

            <div className="col-4">
                <a href="#" onClick={()=>onDelete(project.id)}>X</a>
            </div>
        </div>
    </li>
  )
}

export default ProjectItem