import Upleft from '../mainComponent/Upleft'
import Center from '../mainComponent/Center'
import Downleft from '../mainComponent/Downleft'
import Right from '../mainComponent/Right'
import whale from '../../whale'
import Interview from '../Interview/Interview'


import React from "react";
import {Helmet} from "react-helmet";




function Main(){






  //для добавления кита
  //whale.init()

  return (
    <div className="mainContainer">
      <div className="leftmainDivs">
        
        <div className="leftDivs"><Upleft /></div>
        <div className="leftDivs"><Downleft /></div>
      </div>
      {/* <div className="mainDivs"><Center /></div> */}

      <div class="whale">
      <form>
      <label for="site-search">Search the site:</label>
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
