import React from 'react';
import { Link} from 'react-scroll';
// <a className="pointer about link dim dib mr2 mr4-l mr4-m 7 f6-m f4-l fw6 ttu tracked" href={pdf} style = {{ color: "#0266C8", backgroundColor: "rgba(255,255,255,0.7)"}}> Resume</a>

const Nav = () => {

   return(
      <div>
         <header className="fixed w-100 ph3 pv3 ph3-ns ph4-m pl5-l tr" style={{}}>
           <nav className="f7 f6-m f4-l fw6 ttu tracked" style = {{color: "#0266C8"}} >
             <Link className="pointer about link dim dib mr2 mr4-l mr4-m" to="about" spy={true} smooth={true} duration={1000} style = {{ backgroundColor: "rgba(255,255,255,0.7)"}}> ABOUT</Link>
             <Link className="pointer about link dim dib mr2 mr4-l mr4-m" to="experience" spy={true} smooth={true} duration={1000} style = {{ backgroundColor: "rgba(255,255,255,0.7)"}}> Experience</Link>
             <Link className="pointer about link dim dib mr2 mr4-l mr4-m" to="projects" spy={true} smooth={true} duration={1000} style = {{ backgroundColor: "rgba(255,255,255,0.7)"}}> Projects</Link>
            </nav>
         </header>
      </div>
   )
}

export default Nav;
