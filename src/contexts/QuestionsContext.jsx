import React, {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState
} from 'react'
import { questions } from '../constants'
import { calculateScore, getSurveyId } from '../utils'

export const QuestionsContext = createContext({
  questions,
  sendAnswer: (id, answer) => {},
  answers: {},
  score: 0,
  surveyId: ''
})

export const QuestionsProvider = ({ children }) => {
  const surveyId = useRef(getSurveyId()).current
  const [answers, setAnswers] = useState({})
  const score = useMemo(() => calculateScore(answers), [answers])

  const sendAnswer = (id, answer) => {
    setAnswers((answers) => ({ ...answers, [id]: answer }))
  }

  return (
    <QuestionsContext.Provider
      value={{ questions, sendAnswer, answers, score, surveyId }}
    >
      {children}
    </QuestionsContext.Provider>
  )
}

export const useQuestionsContext = () => useContext(QuestionsContext)
