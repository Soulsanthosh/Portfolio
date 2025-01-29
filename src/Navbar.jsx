import React from 'react'
import { Link } from 'react-scroll'
import "./Navbar.scss"

export default function Navbar() {
  return (
    <div>
        <nav className='nav'>
        <h1>PORTFOLIO</h1>
            <ul>
                <li><Link to="/HomePage" className='btn' spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
                <li><Link to="/SkillsPage" className='btn' spy={true} smooth={true} offset={-40} duration={500}>Skills</Link></li>
                <li><Link to="/ProjectsPage" className='btn' spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
                <li><Link to="/AboutPage" className='btn' spy={true} smooth={true} offset={-50} duration={500}>About</Link></li>
                <li><Link to="/ContactPage" className='btn' spy={true} smooth={true} offset={10} duration={500}>Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}