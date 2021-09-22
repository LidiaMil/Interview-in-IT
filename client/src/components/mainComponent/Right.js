// import {useState, useEffect} from 'react'
// import axios from 'axios'
// import UpLeftCard from '../mainComponent/mainComponentsCards/UpLeftCard'

// function Right(){

//   const [neworganiz, setNeworganiz] = useState([])

//   useEffect(() => {
//     console.log('Hi from newquestions!');
//     axios.get('http://localhost:3000/main/').then(response => setNeworganiz(response.data.organiz))
//   }, [])

//   return (
//     <>
// <h4>Список компаний</h4>
//   <ul className="category-list">
//      {neworganiz && neworganiz.map((item) =>  <li><a href="">{item.title}</a><span>5</span></li> )}
//   </ul>

//     {/* // <>
//     // {newquestions && newquestions.map((item) => <UpLeftCard questions={item}/>)}
//     // </> */}
//     </>
//   )
// }
// export default Right

import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getOrg } from '../../redux/actions/organization.action'
import Cards from "../Card/Card.jsx"


function Right(){
  const dispatch = useDispatch()
  const  organization = useSelector((state) => state.organization)

  useEffect(() => {
      dispatch(getOrg())
  }, [])


  console.log(organization)
  return (
<>
    <h1>Organization</h1>
    <div>
      
    {organization && organization.map((item, index) => <div key={item.id}><Cards {...item} /></div>)}
    </div>
    </>


 
  )
}
export default Right

