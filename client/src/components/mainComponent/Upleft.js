import {useState, useEffect} from 'react'
import axios from 'axios'
import UpLeftCard from '../mainComponent/mainComponentsCards/UpLeftCard'

function Upleft(){

  const [newquestions, setNewquestion] = useState([])

  useEffect(() => {
    console.log('Hi from newquestions!');
    axios.get('http://localhost:3000/main/').then(response => setNewquestion(response.data.questions))
  }, [])

  return (
    <>

<h4>Топ 5 популярных вопросов</h4>
{newquestions && newquestions.map((item) =>
(<div key={item.text} className="job-overview-card">
       <div className="job-card overview-card">
        <div className="overview-wrapper">
         {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="background-color: #fe5b5f"> */}
        <path d="M12 20.6c-1.4 1.5-3.1 3-5.1 3.3-2 .8-5.9-1.3-5.9-5 0-2.5 3.2-8 6.6-15.1C8.5 1.9 9.4 0 12 0c2.6 0 3.5 1.8 4.6 4C23 17 23 17.7 23 19c0 4.4-5.5 8-11 1.7zm9.5-1.7c0-2-6.4-14.4-6.5-14.5-.9-1.9-1.4-2.9-3-2.9-1.8 0-2.3 1.5-3.2 3.2C2.5 17.2 2.5 18 2.5 19c0 3 3.7 6 8.5.6-2-2.6-3-4.8-3-6.6 0-2.7 2-4.2 4-4.2s4 1.5 4 4.2c0 1.8-1 4-3 6.6 4.6 5.2 8.5 2.5 8.5-.6zM12 10.2c-1.2 0-2.5.9-2.5 2.7 0 1.4.9 3.3 2.5 5.4 1.6-2.1 2.5-4 2.5-5.4 0-1.8-1.3-2.7-2.5-2.7z" fill="#fff" />
         <div className="overview-detail">
          <div className="job-card-title">{item.text}</div>
         </div>
        </div>
        <div className="job-overview-buttons">
         <div className="search-buttons time-button">Full Time</div>
        </div>
       </div>
      </div>)
)}





{/* 
  <ul className="category-list">
     {newquestions && newquestions.map((item) =>  <li><a href="">{item.text}</a><span>5</span></li> )}
  </ul> */}

    {/* // <>
    // {newquestions && newquestions.map((item) => <UpLeftCard questions={item}/>)}
    // </> */}
    </>
  )
}
export default Upleft
