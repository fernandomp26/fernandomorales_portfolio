import { useRef } from 'react'
import './About.css'

export default function About({registerRef}) {

   const aboutRef = useRef(null)
   registerRef('about', aboutRef)

   return (
      <div className='about-container' ref={aboutRef}>
         <h1 className='title'>About Me</h1>
         <div className="about">
            <div className="texts">
               <h2>A little about me</h2>
               <p>I am 18 years old and I live in Brazil. After graduating from <b>Escola São José de Vila Matilde</b> (elementary and high school), I decided to enter the world of computing and start a college that involved it and I ended up finding myself in programming. I am a participatory, patient person, with a great desire to learn more and more, and nowadays, I seek experiences that add to my personal and professional life as well.</p>
            </div>
            <div className="texts">
               <h2>Graduation</h2>
               <p>I'm currently taking my degree of <b>Information Systems</b> at <b>Mackenzie Presbyterian University</b>.<br></br><br></br> Start: <b>January 2023</b><br></br>End: <b>December 2026</b>.</p>
            </div>
           <div className="texts">
           <h2>Learning</h2>
               <p>Currently, I am focused on learning more about <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>ReactJS</b>, <b>NextJS</b> and other things about web development. I've had some experience with <b>Python</b> and <b>Java</b>, and I'm planning on do some extracurricular courses to learn more about programming.</p>
           </div>
         </div>
      </div>
   )
}