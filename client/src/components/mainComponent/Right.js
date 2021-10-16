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


  return (
    <>
    <h3>Организации</h3>
    <div>
      
    {organization && organization.map((item, index) => <div key={item.id}><Cards {...item} /></div>)}
    </div>
    </>


 
  )
}
export default Right

