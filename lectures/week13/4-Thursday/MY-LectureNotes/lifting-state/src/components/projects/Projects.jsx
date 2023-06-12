import React from 'react'
import ProjectItem from './ProjectItem'

function Projects({projectsArray, deleteProject}) {
  return (
    <>
        <div className='container'>
            <div className='flex'>
                <div className='mx-4 w-2/3'>

                    <ul>
                        {projectsArray.map(obj => {
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