import './Apresentation.css'
import photo from '../imgs/img-profile-dois.jpg'
import { FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa'

export default function Apresentation() {

   return (
      <>
         <div className="main">
            <div className="image">
               <img src={photo} alt="Profile Img" width={400} />
            </div>
            <div className="main-text">
               <h1 className='hello'>Hello, I'm</h1>
               <h1 className='name'>&lt;<strong>Fernando</strong>/&gt;</h1>
               <p>A great admirer of front-end and back-end programming, UI/UX design, and currently a university student <br></br>in Information Systems.</p>
               <div className="social-media">
                  <a href="https://github.com/fernandomp26" target='_blank'>
                     <FaGithub />
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=5511953302504" target='_blank'>
                     <FaWhatsapp />
                  </a>
                  <a href="https://www.instagram.com/pepiinhoo_" target='_blank'>
                     <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com/in/fernando-morales-peres-894421271/" target='_blank'>
                     <FaLinkedin />
                  </a>
               </div>
            </div>
         </div>
      </>
   )
}