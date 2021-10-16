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
        <Downleft />
      </div>
      <div className="centerDiv">
        <Interview />

      </div>
      <div className="rightmainDivs">
        <div className="rightDivs"><Right /></div>
      </div>
    </div>

  )
}
export default Main
