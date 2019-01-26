import React from 'react';
import './Projects.css';
import * as Scroll from 'react-scroll';
import { Element } from 'react-scroll';

const Projects = () => {

   return(
      <div>
         <div>
            <Element name="projects" className="element" >
            </Element>
         </div>
         <div id = 'container'>

            <div id = 'rightContainer' className = 'mt6'>
                  <article class="mw7 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                        <h1 class="f4">Yelp advisor</h1>
                     <p class="lh-copy center f6 black-70">
                        •	Led 5 members to build a B2C application in Java that recommended restaurants
                         based on Yelp RESTFUL API and user’s reference, and a management system that
                         efficiently controlled users’ and business’ data with a Java CRUD program.
                     </p>
                  </article>
                  <article class="mw7 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                        <h1 class="f4">Facial Recognition Web Application</h1>
                     <p class="lh-copy center f6 black-70">
                     The web application analyze users' input pictures and detect human faces using
                     machine learning algorithms, with a back end that manage users' data.
                     </p>
                  </article>
                  <article class="mw7 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                     <div class="tc">
                        <h1 class="f4">Mimi Whitehouse</h1>
                        <hr class="mw3 bb bw1 b--black-10" />
                     </div>
                     <p class="lh-copy center f6 black-70">
                     Quite affectionate and outgoing.
                     She loves to get chin scratches and will
                     roll around on the floor waiting for you give her more of them.
                     </p>
                  </article>
            </div>
            <div id = 'leftContainer' className="mt6 cf ph3 ph5-ns pv5">
               <header class="">
                  <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
                     Projects
                  </h1>
               </header>
            </div>
         </div>
      </div>
   )
}

export default Projects;
