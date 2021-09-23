import { useState, useEffect } from 'react'
import axios from 'axios'
import UpLeftCard from '../mainComponent/mainComponentsCards/UpLeftCard'
import Vacancard from '../mainComponent/Vacancard'

function Downleft() {

  const [vacansies, setNewvacansies] = useState({})

  useEffect(() => {
    console.log('Hi from newquestions!');
    axios.get('https://api.hh.ru/vacancies?count=6&locale=RU&text=frontend')
      .then(response => setNewvacansies(response.data))
  }, [])

  return (
    <>
      <div className="leftTop">
      <h3>Вакансии с HH</h3>
      </div>
      <ul className="category-list leftDivs">
        {vacansies.items && vacansies.items.map((item) => <Vacancard vacanprom={item} />)}
      </ul>

      {/* // <>
    // {newquestions && newquestions.map((item) => <UpLeftCard questions={item}/>)}
    // </> */}
    </>
  )
}
export default Downleft
