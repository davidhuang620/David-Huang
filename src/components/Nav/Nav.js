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
             <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={1000} >Test 1</Link></li>
             <a className="link dim black dib mr4 f3" href="#" title="Me">Home</a>
             <a className="link dim black dib mr4 f3" href="#" title="About">About</a>
             <a className="link dim black dib mr4 f3" href="#" title="">Skills</a>
             <a className="link dim black dib mr4 f3" href="#" title="Contact">Experience</a>
           </nav>
         </header>
      </div>
   )
}

export default Nav;
