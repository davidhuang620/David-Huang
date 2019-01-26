import React from 'react';
import './Experience.css';

const Experience = () => {

   return(
      <div className = 'vh-100' id = 'container'>
         <div id = 'leftContainer' className="mt6 cf ph3 ph5-ns pv5">
            <header class="">
               <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
                  Work
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
      </div>
   )
}

export default Experience;
