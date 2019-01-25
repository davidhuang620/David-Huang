import React from 'react';
import './Top.css';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Top = () => {

   let Link       = Scroll.Link;
   let Element    = Scroll.Element;
   let Events     = Scroll.Events;
   let scroll     = Scroll.animateScroll;
   let scrollSpy  = Scroll.scrollSpy;

   return(
         <div className="vh-100 tc" id = "title">
            <div className="dtc v-mid">
               <h1 className="f1 f-headline-l fw2 black">David Huang</h1>
               <h1 className="f2 fw1 black"> Software Engineer</h1>
            </div>
            <div>
               <Element name="test1" className="element" >
              </Element>
            </div>
         </div>
   )
}

export default Top;
