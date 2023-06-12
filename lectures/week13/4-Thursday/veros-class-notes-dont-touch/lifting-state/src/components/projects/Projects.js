import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = ({projectsArray, deleteProject}) => {
  return (
    <>
    
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">

                    <ul>
                        {projectsArray.map(obj =>{
                            return <ProjectItem key={obj.id} project={obj} onDelete={deleteProject} />
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects