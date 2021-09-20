import {useState, useEffect} from 'react'
import axios from 'axios'
import UpLeftCard from '../mainComponent/mainComponentsCards/UpLeftCard'

function Right(){

  const [neworganiz, setNeworganiz] = useState([])

  useEffect(() => {
    console.log('Hi from newquestions!');
    axios.get('http://localhost:3000/main/').then(response => setNeworganiz(response.data.organiz))
  }, [])

  return (
    <>
<h4>Список компаний</h4>
  <ul class="category-list">
     {neworganiz && neworganiz.map((item) =>  <li><a href="">{item.title}</a><span>5</span></li> )}
  </ul>

    {/* // <>
    // {newquestions && newquestions.map((item) => <UpLeftCard questions={item}/>)}
    // </> */}
    </>
  )
}
export default Right
