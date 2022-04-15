import React, { useRef } from 'react'
import { getLocalAnswers } from '../utils/common'

export const Result = () => {
  const { total } = useRef(getLocalAnswers()).current

  return (
    <div className="result-page">
      <div className="result-key">TOPLAM PUAN</div>
      <div className="result-value">{total}</div>
    </div>
  )
}
