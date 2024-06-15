import { useState } from 'react';
import './Header.css';
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header({ scrollToRef }) {

   const nav = document.getElementById('nav');
   const [menu, setMenu] = useState(false);

   const openMenu = () => {
      setMenu(!menu);
      if(menu) {
         nav.style.marginTop = '0';
      } else {
         nav.style.marginTop = '-100%';
      }
   }

   return (
      <> 
         <header>
            <a className='button-menu' onClick={openMenu}>
               <IoMenu />
            </a>
            <p className='icon'>FM</p>
            <div className="nav" id='nav'>
               <a className='button-menu' onClick={openMenu}>
                  <IoClose />
               </a>
               <a onClick={() => scrollToRef('about')}>About</a>
               <a onClick={() => scrollToRef('habilities')}>Habilities</a>
               <a onClick={() => scrollToRef('projects')}>Projects</a>
               <a onClick={() => scrollToRef('contact')}>Contact me</a>
            </div>
         </header>
      </>
   )
}