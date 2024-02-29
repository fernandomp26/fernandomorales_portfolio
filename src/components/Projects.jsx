import './Projects.css'
import aw from './imgs/projects-imgs/aw.jpg'
import jav from './imgs/projects-imgs/jav.png'
import py from './imgs/projects-imgs/py.png'
import react from './imgs/projects-imgs/react.png'
import ProjectsBody from './ProjectsBody';
import { useRef } from 'react'

export default function Projects({registerRef}) {

    const projectsRef = useRef(null);
    registerRef('projects', projectsRef);

    const awProject = {
        name: "Apple Watch",
        description: "This project was developed using HTML, CSS, and a tool that makes it fully interactive: JavaScript. After delving a bit into the basics of this tool, I decided to replicate Apple's page about their Apple Watches because, after visiting this website, I saw that it made changes when interacting with buttons or photos, and I ended up being enchanted by so much interactivity. Using the magic of JS, I made the application completely interactive, allowing the user to change the watch's color, size, and visually preview the page adapting to their request.",
        img: aw
    }

    const jProject = {
        name: "House Rental",
        description: "A project developed in Java simulating a house rental application. The user could register as a regular user, who could check available houses for rent, see the final price, rent, and provide final feedback. If the user registers as a property owner, they can register their property by providing information such as: name, description, address, price per night, etc. They can also check if their property has a rating or not and view other properties. To log into an existing account, it is necessary to provide email and password. This project was developed as a semester project for my college.",
        img: jav
    }

    const pyProject = {
        name: "Election Simulator",
        description: "A project developed in Python simulating an election for president, governor, and mayor of a city. After previously registering some candidates, the user had a series of interactions, such as: voting for candidates for all positions by providing their CPF (Individual registration) first and then informing the candidate's number they want to vote for (they could also vote blank or null), could check the vote counting, etc. This project was also developed as a semester project for my college.",
        img: py
    }

    const rProject = {
        name: "MackInfo",
        description: "A project developed in a group using the ReactJs framework, also as a semester project for college. It consists in a guide for the new students at the college who would be studying something related to technology, where we included some information about the field and information technology courses at Mackenzie, some professors, social media of athletic groups, courses, etc.",
        img: react
    }

    const projectsList = [
        awProject,
        jProject,
        pyProject,
        rProject
    ]

    return (
        <div className="projects-container" ref={projectsRef}>
            <h1 className='title'>Projects</h1>
            <div className="projects-content">
                {projectsList.map(item => 
                    <ProjectsBody 
                        name={item.name}
                        description={item.description}
                        img={item.img}
                    />    
                )}
            </div>
        </div>
    )
}