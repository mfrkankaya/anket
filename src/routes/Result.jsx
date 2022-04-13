import React, { useRef } from 'react'
import { getLocalAnswers } from '../utils/common'

export const Result = () => {
  const { answers, total } = useRef(getLocalAnswers()).current

  return (
    <div className="result-page">
      <div>TOPLAM PUAN</div>
      <div>{total}</div>
    </div>
  )
}
