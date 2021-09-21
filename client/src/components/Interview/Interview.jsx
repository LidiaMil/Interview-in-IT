import { useEffect } from 'react'
import OneInterview from "../OneInterview/OneInterview"
import { useDispatch, useSelector } from "react-redux";
import { getInterview } from '../../redux/actions/interview.action'

function Question() {
  const dispatch = useDispatch()
  const interview = useSelector((state) => state.interview)

  useEffect(() => {
    dispatch(getInterview())
  }, [])

  return (
    <>
    <h1>All Interview</h1>
      <div >
        
        {interview && interview.map((item, index) => <div className="col-4" key={item.id}><OneInterview {...item} /></div>)}
      </div>

    </>
  )
}
export default Question
