import React, { Fragment, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Question } from '../components/Question'
import { questions } from '../constants'
import { useQuestionsContext } from '../contexts'
import { submitSurvey } from '../firebase'

export const Home = () => {
  const { surveyId, answers } = useQuestionsContext()
  const [pending, setPending] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    setPending(true)

    const status = await submitSurvey(surveyId, answers)

    if (status) {
      localStorage.setItem('SURVEY_ANSWERS', JSON.stringify(answers))
      setSuccess(true)
    }

    setPending(false)
  }

  return (
    <Fragment>
      <div className="container">
        <h1>Üniversite Öğrencilerinde Kaygı Seviyesi Anketi</h1>
        <p className="description">
          Türk-Alman Üniversitesi öğrencileri olarak Bilimsel Çalışma Yöntemleri
          projemiz için bu anketi yapmaktayız. Ölçeğin madde havuzu Baltaş
          (1999) tarafından geliştirilen 50 adet kaygı cümlesi izin dahilinde
          alınarak oluşturulmuştur. Ölçeğin güvenirlik analizi Hemşirelik, Beden
          Eğitimi Öğretmenliği ve Fen Bilgisi Öğretmenliği bölümünde okumakta
          olan 206 lisans öğrencisinin katılımı ile gerçekleştirilmiştir.
          Uygulamadan elde edilen veriler faktör analizine tabi tutulmuştur.
          Analiz sonunda 12 madde, madde yük değeri 0,40’tan düşük olduğu için,
          4 madde ise ayrışmamış (binişik) madde olduğu için ölçekten
          düşürülmüştür. Kalan 34 madde 0,41 ile 0,74 arasında değişen beş alt
          boyuta yüklenmiştir. Ölçeğin iç güvenirlik katsayısı Cronbach’s Alpha
          (α)=0,87 olarak hesaplanmış, aşağıda alt boyutlar ilgili maddeler ve
          güvenirlik düzeyleri sunulmuştur.
          <br />
          <br />
          Ölçeğin derecelendirilmesi
          <br />
          Ölçekten alınacak en düşük puan 34 en yüksek puan ise 170’dir.
          <br />
          Ölçek 5’li Likert tipinde olup
          <br />
          <br />
          Maddeler
          <br />
          (1) Hiçbir zaman
          <br />
          (2) Nadiren
          <br />
          (3) Bazen
          <br />
          (4) Sık sık
          <br />
          (5) Her zaman şeklinde derecelendirilmiştir.
          <br />
          Ölçekte ters kodlanan madde bulunmamaktadır.
          <br />
          <br />
          Ölçeğin Puanlaması
          <br />
          Kaygı Düzeyleri;
          <br />
          34- 78 puan: Düşük Düzeyde Kaygı {`<(σ±𝑥̅)`}
          <br />
          79-125 puan: Orta Düzeyde Kaygı (σ±𝑥̅)
          <br />
          126-170 puan: Yüksek Düzeyde Kaygı {`>(σ±𝑥̅)`} olarak puanlanmalıdır.{' '}
          <br />
        </p>
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
        <button
          className="submit"
          type="button"
          disabled={pending}
          onClick={handleSubmit}
        >
          Gönder
        </button>
      </div>
      {success && <Navigate to="/result" />}
    </Fragment>
  )
}
