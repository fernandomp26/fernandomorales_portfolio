import './Apresentation.css'
import photo from '../imgs/img-profile-dois.jpg'
import { FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa'

export default function Apresentation() {

   return (
      <>
         <div className="main">
            <div className="image">
               <img src={photo} alt="Profile Img" width={400} />
            </div>
            <div className="main-text">
               <h1 className='hello'>Hello, my name is</h1>
               <h1 className='name'><strong>Fernando</strong>!</h1>
               <p>This Portfolio tells a little about me and my life experiences. <br></br>Bellow you can send me a mesage on Whatsapp, follow me on Instagram and acess my GitHub!</p>
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
               </div>
            </div>
         </div>
      </>
   )
}