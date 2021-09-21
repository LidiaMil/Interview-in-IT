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
  <ul class="category-list">
     {newquestions && newquestions.map((item) =>  <li><a href="">{item.text}</a><span>5</span></li> )}
  </ul>

    {/* // <>
    // {newquestions && newquestions.map((item) => <UpLeftCard questions={item}/>)}
    // </> */}
    </>
  )
}
export default Upleft
