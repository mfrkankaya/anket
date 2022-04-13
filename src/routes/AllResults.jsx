import React, { useEffect, useState } from 'react'
import { getAvarageResults } from '../firebase'

export const AllResults = () => {
  const [avarageResult, setAvarageResult] = useState(0)

  useEffect(() => {
    ;(async () => {
      const avarageResult = await getAvarageResults()
      setAvarageResult(avarageResult)
    })()
  }, [])
  return (
    <div className="result-page">
      <div>Ortalama</div>
      <div>{avarageResult.toFixed(2)}</div>
    </div>
  )
}
