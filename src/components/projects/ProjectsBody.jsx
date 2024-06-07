import './Projects.css'

export default function ProjectsBody(props) {

    return (
        <div className="projectsbody-content">
            <div className="content-top">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
            </div>
            <div className="content-bottom">
                <img src={props.img} alt="Photo" />
            </div>
        </div>
    )
}