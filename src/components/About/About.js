import React from 'react';

const About = () => {

   return(
      <div className = 'vh-100' style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
         <div className="center measure-wide f5 pv5 lh-copy ph2">
            <h1 className="f1 lh-title">About Me</h1>
               <div className = "f4">
                  <p>
                  Hi, I am David.
                  </p>
                  <p>
                  I am a passionate Software Engineer with 1+ year experience developing robust code,
                  and eager to learn new technology stacks.
                  </p>
                  <p>
                     Since I graduated from the University of Texas at Dallas with my B.S. in Mathematics and Computer Science (minor),
                     I have been working as an engineer in the field of software development and machine learning.
                     With these valuable diverse experiences, I decided to further pursue my career in the Software Engineer space.

                  </p>
                  <p>
                     I just recently moved to Bay Area. I am excited to explore more about the city and meeting interesting people around here.
                  </p>
               </div>
           </div>
      </div>
   )
}

export default About;
