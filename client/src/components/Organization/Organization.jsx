import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getOrg } from '../../redux/actions/organization.action'
import Cards from "../Card/Card.jsx"


function Organization(){
  const dispatch = useDispatch()
  const  organization = useSelector((state) => state.organization)

  useEffect(() => {
      dispatch(getOrg())
  }, [])



  return (
    <>
    <h1>Organization</h1>
    <div>
    {organization && organization.map((item, index) => <div className="company" key={item.id}><Cards {...item} /></div>)}
    </div>
    </>
  )
}
export default Organization
