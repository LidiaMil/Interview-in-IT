import axios from "axios";
import { useEffect } from 'react'
import OneQuestion from "../OneQuestion/OneQuestion"
import { useDispatch, useSelector } from "react-redux";
import { getQuestion } from '../../redux/actions/question.action'

function Question() {
  const dispatch = useDispatch()
  const question = useSelector((state) => state.question)


  useEffect(() => {
    dispatch(getQuestion())
  }, [])

  console.log(question)

  return (
    <>

      <div className="row my-3">
        {question && question.map((item, index) => <div className="col-4" key={item.id}><OneQuestion {...item} /></div>)}
      </div>

    </>
  )
}
export default Question
