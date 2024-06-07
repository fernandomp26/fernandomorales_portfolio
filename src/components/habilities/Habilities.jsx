import { useRef, useState } from "react"
import './Habilities.css'
import { FaReact, FaHtml5, FaCss3, FaPython, FaJava, FaFileExcel, FaFilePowerpoint, FaFileWord } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export default function Habilities({registerRef}) {

    const habRef = useRef(null)
    registerRef('habilities', habRef)

    const[bol, setBol] = useState(true)
    
    const cards = document.querySelectorAll('.card')
    const texts = document.querySelectorAll('.card-h1')
    const icons = document.querySelectorAll('.icon')
    const animation = () => {
        if(bol) {
            setBol(!bol);
            cards.classList.add('card-changed')
            texts.style.display = 'block'
            icons.style.display = 'none'
        } else {
            setBol(!bol)
            cards.classList.remove('card-changed')
            texts.style.display = 'none'
            icons.style.display = 'block'
        }
    }

    return (
        <div className="habilities-container" ref={habRef}>
            <h1 className='title'>Habilities</h1>
            <div className="cards-content">
                <div className="card html-card">
                    <FaHtml5 className="icon"/>
                    <h1 className="card-h1">HTML5<br></br><span className="card-h1">Intermediary</span></h1>
                </div>
                <div className="card css-card">
                    <FaCss3 className="icon"/>
                    <h1 className="card-h1">CSS<br></br><span className="card-h1">Basic/Intermediary</span></h1>
                </div>
                <div className="card js-card">
                    <IoLogoJavascript className="icon"/>
                    <h1 className="card-h1">JavaScript<br></br><span className="card-h1">Basic</span></h1>
                </div>
                <div className="card react-card">
                    <FaReact className="icon"/>
                    <h1 className="card-h1">ReactJS<br></br><span className="card-h1">Basic</span></h1>
                </div>
                <div className="card py-card">
                    <FaPython className="icon"/>
                    <h1 className="card-h1">Python<br></br><span className="card-h1">Basic(already programed)</span></h1>
                </div>
                <div className="card java-card">
                    <FaJava className="icon"/>
                    <h1 className="card-h1">Java<br></br><span className="card-h1">Basic</span></h1>
                </div>
                <div className="card excel-card">
                    <FaFileExcel className="icon"/>
                    <h1 className="card-h1">Microsoft Excel<br></br><span className="card-h1">Basic</span></h1>
                </div>
                <div className="card pp-card">
                    <FaFilePowerpoint className="icon"/>
                    <h1 className="card-h1">Microsoft PowerPoint<br></br><span className="card-h1">Basic</span></h1>
                </div>
                <div className="card word-card">
                    <FaFileWord className="icon"/>
                    <h1 className="card-h1">Microsoft Word<br></br><span className="card-h1">Basic</span></h1>
                </div>
                <div className="card en-card">
                    <h2 className="icon">English</h2>
                    <h1><span className="card-h1">Intermediary</span></h1>
                </div>
                <div className="card es-card">
                    <h2 className="icon">Spanish</h2>
                    <h1><span className="card-h1">Basic</span></h1>
                </div>
            </div>
        </div>
    )
}