
import {useState, useEffect} from 'react'
import axios from 'axios'

function UpLeftCard(questions){
console.log(questions);

  return (
    <>
    <div className="word">{questions.questions.text}</div>
    </>
  )
}
export default UpLeftCard
