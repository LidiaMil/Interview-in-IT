import Downleft from '../mainComponent/Downleft'
import Right from '../mainComponent/Right'
import Interview from '../Interview/Interview'

import React from "react";

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
