import React, { useEffect, useState } from 'react'
import { getAvarageResults } from '../firebase'

export const AllResults = () => {
  const [avarageResult, setAvarageResult] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    ;(async () => {
      const { avarage, count } = await getAvarageResults()
      setAvarageResult(avarage)
      setCount(count)
    })()
  }, [])

  return (
    <div className="result-page">
      <div className="result-key">Ortalama</div>
      <div className="result-value">{avarageResult.toFixed(2)}</div>

      <div className="result-key">Katılımcı sayısı</div>
      <div className="result-value">{count}</div>
    </div>
  )
}
