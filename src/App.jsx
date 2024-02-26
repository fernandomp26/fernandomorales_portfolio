import './App.css'
import Header from './components/Header'
import Apresentation from './components/Apresentation'
import About from './components/About'
import Habilities from './components/Habilities'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";

export default function App() {

  const [showTop, setShowTop] = useState(false);
  const refs = {}
  const registerRef = (name, ref) => {
    refs[name] = ref;
  }

  const scrollToRef = (name) => {
    window.scrollTo({
      top: refs[name].current.offsetTop,
      behavior: 'smooth'
    });
    setShowTop(true);
  }

  const scrollHome= () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setShowTop(false)
  }
  
  return (
    <div className='app'>
      <Header scrollToRef={scrollToRef} />
      <Apresentation/>
      <About registerRef={registerRef} />
      <Habilities registerRef={registerRef} />
      <Projects registerRef={registerRef} />
      <ContactMe registerRef={registerRef} />
      {showTop && (
        <a onClick={scrollHome} style={{position: 'fixed', bottom: '10px', right: '30px', color: '#00ff85', fontSize: '50px', cursor: 'pointer'}}>
          <IoIosArrowUp />
        </a>
      )}
    </div>
  )
}