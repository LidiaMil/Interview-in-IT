import Upleft from '../mainComponent/Upleft'
import Center from '../mainComponent/Center'
import Downleft from '../mainComponent/Downleft'
import Right from '../mainComponent/Right'
import whale from '../../whale'

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
      <div id="whale">


     </div>
      <div className="rightmainDivs">
        <div className="rightDivs"><Right /></div>
      </div>
    </div>
  )
}
export default Main
