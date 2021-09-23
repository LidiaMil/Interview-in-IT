import Center from '../mainComponent/Center'
import Downleft from '../mainComponent/Downleft'
import Right from '../mainComponent/Right'
import whale from '../../whale'
import Interview from '../Interview/Interview'
import { useEffect } from "react";

import React from "react";
import axios from 'axios'




function Main() {

  return (

    <div className="mainContainer">
      <div className="leftmainDivs">



        <div className="leftDivs"><Downleft /></div>
      </div>
      {/* <div className="mainDivs"><Center /></div> */}
      <div class="centerDiv">
        {/* <form>
      <label for="site-search">Search the site:</label>
      <input type="search" id="site-search" name="q" aria-label="Search through site content" />
      <button>Search</button>
      </form> */}
        <Interview />

      </div>
      <div className="rightmainDivs">
        <div className="rightDivs"><Right /></div>
      </div>
    </div>

  )
}
export default Main
