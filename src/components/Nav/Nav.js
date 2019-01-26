import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Nav = () => {

   const scrollTo = () => {
     scroller.scrollTo('scroll-to-element', {
       duration: 800,
       delay: 0,
       smooth: 'easeInOutQuart'
     })
   }

   return(
      <div>
         <header className="fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l tr-l">
           <nav className="f6 fw6 ttu tracked">
             <Link activeClass="active" className="pointer about link dim black dib mr4 f3" to="about" spy={true} smooth={true} duration={1000}> ABOUT</Link>
             <Link activeClass="active" className="pointer about link dim black dib mr4 f3" to="experience" spy={true} smooth={true} duration={1000}> Experience</Link>
             <Link activeClass="active" className="pointer about link dim black dib mr4 f3" to="projects" spy={true} smooth={true} duration={1000}> Projects</Link>
             <Link activeClass="active" className="pointer about link dim black dib mr4 f3" to="resume" spy={true} smooth={true} duration={1000}> Resume</Link>
           </nav>
         </header>
      </div>
   )
}

export default Nav;
