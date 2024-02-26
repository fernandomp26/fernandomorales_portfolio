import './ContactMe.css'
import { useRef } from 'react'
import { BiSolidHappyBeaming } from "react-icons/bi";

export default function ContactMe({registerRef}) {

    const contactRef = useRef(null)
    registerRef('contact', contactRef)

    return (
        <div className="contactme-container" ref={contactRef}>
            <h1 className="title">Contact Me</h1>
            <div className="contactme-content">
                <p>If you like my portfolio, or my projects, you can visit my <b>GitHub</b> to see more about them and some codes. And if you want to contact me, you can click on the icons at the top of the page (<b>Whatsapp/Instagram</b>) and sand me a message!</p>
                <p>And to make this tab more complete, this is my <strong>personal e-mail:</strong> <b>fmperes26@gmail.com</b>.</p>
                <p>I'm searching for <b>FreeLances</b>, <b>Internship</b>, or anyhthing that can bring me knowledge and learning for my professional and personal life!</p>
                <h3>Hope U like it!</h3>
                <BiSolidHappyBeaming className='happy-face-icon'/>
            </div>
            <div className="footer">
                <p>@Copyright 2024 - Developed by Fernando Morales Peres</p>
            </div>
        </div>
    )
}