import React, {useState, useEffect} from 'react'
import Projects from './projects/Projects'
import AddProject from './projects/AddProject'
import { v4 as uuidv4 } from 'uuid';

function ProjectMgmt() {

    const [projects, setProjects] = useState([])

    // callback will run once
    useEffect(() => {
      
        setProjects([
            {
                id: uuidv4(),
                category: 'Front-End', 
                title: 'Javascript'
            },
            {
                id: uuidv4(),
                category: 'Back-End', 
                title: 'Node'
            },
            {
                id: uuidv4(),
                category: 'Front-End', 
                title: 'React'
            }
          ])
        
    }, [])
    
    const handleAddProject = (newProjectObj) => {
        setProjects([newProjectObj, ...projects])

    }
    console.log(projects);

    const handleRemoveProject = (id) => {
        
        let filteredProjects = projects.filter(projectObj => {
            return id !== projectObj.id
        })

        setProjects(filteredProjects)
    }

  return (
    <>
        <h1>Project Management</h1>

        <AddProject addProjectProp={project => handleAddProject(project)} />

        <Projects projectsArray={projects} deleteProject={id=>handleRemoveProject(id)} />
    </>
  )
}

export default ProjectMgmt

// const project = (newProject) => handleAddProject(newProject)
