import { useEffect } from 'react'
import OneQuestion from "../OneQuestion/OneQuestion"
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
        
        {interview && interview.map((item, index) => <div className="col-4" key={item.id}><OneQuestion {...item} /></div>)}
      </div>

    </>
  )
}
export default Question
