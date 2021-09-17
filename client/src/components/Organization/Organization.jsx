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
export default Organization
