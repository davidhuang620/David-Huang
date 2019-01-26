import React from 'react';
import './Experience.css';
import * as Scroll from 'react-scroll';
import { Element } from 'react-scroll';

// className = 'vh-100'

const Experience = () => {

   return(
      <div>
         <div>
            <Element name="experience" className="element" >
           </Element>
         </div>
         <div id = 'container'>
            <div id = 'leftContainer' className="mt6 cf ph3 ph5-ns pv5">
               <header class="">
                  <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
                     Experience
                  </h1>
               </header>
            </div>
            <div id = 'rightContainer' className = 'mt6'>
                  <article class="mw7 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                        <h1 class="f4">Solution Engineer</h1>
                        <h1 class="f6 pb3">Ascension Data & Analytics</h1>
                     <p class="lh-copy center f6 black-70">
                        <ul>
                           <li>
                           •	Used Python to build enterprise pipeline and user interfaces, also develop efficient algorithms to improve the efficiency and efficacy of daily business flow.
                           </li>
                           <li>
                           With more than a trillion records of data in SQL, performed data cleansing and querying, as well as developed efficient algorithms cutting the run time from O(N^2) 336 hours to O(N)12 hours.
                           </li>
                           <li>
                           Built machine learning models for the Fintech Hedge Fund to predict the performing probabilities for pools of mortgages worth millions of dollars. The business then made buy/sell decisions based on the forecast.
                           </li>
                        </ul>
                     </p>
                  </article>
                  <article class="mw7 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                        <h1 class="f4">Software Engineer</h1>
                        <h1 class="f6 pb3">Tuva Blockchain – Blackstone Launchpad</h1>
                     <p class="lh-copy center f6 black-70">
                        <ul>
                           <li>
                           •	Deployed the product in Solidity, a programming language for implementing smart contracts on blockchain platform.
                           </li>
                           <li>
                           •	Develop the Web App using the MERN stack, React JS, Node JS, Express JS, and MongoDB.
                           </li>
                           <li>
                           •	Joined Blackstone Launchpad, entrepreneurship program from the world’s largest investment firm.
                           </li>
                        </ul>
                     </p>
                  </article>
                  <article class="mw7 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                        <h1 class="f4">Engineer/ Analyst Intern</h1>
                        <h1 class="f6 pb3">General Motors Financial</h1>
                     <p class="lh-copy center f6 black-70">
                        <ul>
                           <li>
                           Used Python and VBA Programming to create user interfaces and automated business pipeline to reduce repetitive task and human error.
                           </li>
                           <li>
                           Built machine learning predicting models in SAS programming to forecast car price and customers’ lease term based on data sets containing more than 1.7 Million observations and 20 variables.
                           </li>
                        </ul>
                     </p>
                  </article>
            </div>
         </div>
      </ div>
   )
}

export default Experience;
