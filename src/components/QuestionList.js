import React from 'react'
import Question from './Question'

const QuestionList = ({ questions }) => (
  <div>
    {questions.map((q, index) => (
      <Question key={index} question={q.question} answer={q.answer} />
    ))}
  </div>
)


export default QuestionList