import Center from '../mainComponent/Center'
import Downleft from '../mainComponent/Downleft'
import Right from '../mainComponent/Right'
import whale from '../../whale'
import Interview from '../Interview/Interview'
import { useEffect } from "react";

import React from "react";
import axios from 'axios'




function Main(){

  // let elements = document.getElementsByClassName("hh-widget-6nqx09zsi2a")
  // console.log(elements);
  //var p_prime = elements.cloneNode(true);



//   useEffect(() => {
//     axios.get('https://api.hh.ru/vacancies?count=6&locale=RU&text=frontend')


//     // let widgetScript = document.getElementsByClassName("hh-script");
//     // let widget = widgetScript[0].nextSibling.cloneNode(true)
//     // console.log('!!!!!!', widget);
//     const script = document.createElement('script');
//     script.src = 'https://api.hh.ru/widgets/vacancies/search?count=6&locale=RU&links_color=1560b2&border_color=1560b2&text=frontend'
//     script.async = true;
//     script.innerHTML = JSON.stringify({ /* JSON object */})
//     //document.getElementById("myContainer").appendChild(widget);
//     //document.getElementById("myContainer").appendChild(script);
//     document.body.appendChild(script)

//     return () => {

//       document.body.removeChild(script)      
//     }

// }, [])

  //для добавления кита
  //whale.init()

  return (

    <div className="mainContainer">
      <div className="leftmainDivs">
        <div id="myContainer">

        </div>
        <div className="leftDivs"><Downleft /></div>
      </div>
      {/* <div className="mainDivs"><Center /></div> */}
      <div class="centerDiv">
      <form>
      <label htmlFor="site-search">Search the site:</label>
      <input type="search" id="site-search" name="q" aria-label="Search through site content" />
      <button>Search</button>
      </form>
      <Interview />

     </div>
      <div className="rightmainDivs">
        <div className="rightDivs"><Right /></div>
      </div>
    </div>
  
  )
}
export default Main
