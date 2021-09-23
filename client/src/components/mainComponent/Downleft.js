import {useState, useEffect} from 'react'
import axios from 'axios'
import UpLeftCard from '../mainComponent/mainComponentsCards/UpLeftCard'
import Vacancard from '../mainComponent/Vacancard'

function Downleft(){

  const [vacansies, setNewvacansies] = useState({})

  useEffect(() => {
    console.log('Hi from newquestions!');
    axios.get('https://api.hh.ru/vacancies?count=6&locale=RU&text=frontend')
    .then(response => setNewvacansies(response.data))
  }, [])

  return (
    <>
<h4>Вакансии с HH</h4>
  <ul className="category-list">
     {vacansies.items && vacansies.items.map((item, index) =>  <Vacancard key={index} vacanprom={item} /> )}
  </ul>

    {/* // <>
    // {newquestions && newquestions.map((item) => <UpLeftCard questions={item}/>)}
    // </> */}
    </>
  )
}
export default Downleft
