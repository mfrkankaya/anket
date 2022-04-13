import React from 'react'
import { useQuestionsContext } from '../contexts/QuestionsContext'

export const Question = ({ question }) => {
  const { answers, sendAnswer } = useQuestionsContext()

  return (
    <div className="card">
      <div className="title">
        {question.id}. {question.text}
      </div>

      <div className="choices">
        <div className='small'>Hiçbir zaman</div>
        {[1, 2, 3, 4, 5].map((choice) => (
          <label key={choice} className="choice">
            <input
              type="radio"
              checked={answers[question.id] === choice}
              onChange={(e) => sendAnswer(question.id, choice)}
            />
            <div>{choice}</div>
          </label>
        ))}
        <div className='small'>Her zaman</div>
      </div>
    </div>
  )
}
