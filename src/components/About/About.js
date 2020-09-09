import React from 'react';
import { Element } from 'react-scroll';

const About = () => {

   return(
   <div>

      <div className = 'vh-100 mb6' style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
         <div className="center measure-wide f5 pv5 lh-copy pr4 pl4">
         <div>
            <Element name="about" className="element" >
           </Element>
         </div>
            <h1 className="f1 lh-title">About Me</h1>
               <div className = "f4">
                  <p>
                  Hi, I am David.
                  </p>
                  <p>
                  I am a passionate Software Engineer with 3+ year experience developing robust code in production software.
                  </p>
                  <p>
                     I have been working as an engineer in the field of software development and machine learning
                     since I graduated from the University of Texas at Dallas with my B.S. in Mathematics and minor in Computer Science.
                     With these valuable diverse experiences, I want to further pursue my career in the Software Engineering space.
                  </p>
                  <p>
                     I am currently based in Austin, Texas.
                     I am excited to explore more about the city, to try out good taco places 🌮 , and to meet interesting people here.
                  </p>
               </div>
           </div>
      </div>
   </div>
   )
}

export default About;
