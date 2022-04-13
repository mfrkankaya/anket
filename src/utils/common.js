import { nanoid } from 'nanoid'

export const getSurveyId = () => {
  const surveyId = localStorage.getItem('SURVEY_ID')

  if (surveyId) return surveyId

  const newId = nanoid()
  localStorage.setItem('SURVEY_ID', newId)

  return newId
}

export const calculateScore = (answers) =>
  Object.values(answers).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  )

export const getLocalAnswers = () => {
  const answers = JSON.parse(localStorage.getItem('SURVEY_ANSWERS'))
  const total = Object.values(answers).reduce(
    (prev, current) => prev + current,
    0
  )

  return { answers, total }
}
