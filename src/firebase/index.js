import { initializeApp } from 'firebase/app'
import { get, getDatabase, ref, set } from 'firebase/database'

export const app = initializeApp({
  apiKey: 'AIzaSyDN-kZQjsujuHasXAu7K-723k9WtGM5kN4',
  authDomain: 'ogrencianket.firebaseapp.com',
  databaseURL:
    'https://ogrencianket-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'ogrencianket',
  storageBucket: 'ogrencianket.appspot.com',
  messagingSenderId: '206352816915',
  appId: '1:206352816915:web:f13e2b7789cf424d7598e6'
})

export const database = getDatabase(app)

export const submitSurvey = async (surveyId, answers) => {
  try {
    await set(ref(database, `surveys/${surveyId}`), answers)
    return true
  } catch (error) {
    console.error(error)
    alert('Bilinmeyen bir hata oluştu.')
    return false
  }
}

export const getAvarageResults = async () => {
  try {
    const snap = await get(ref(database, 'surveys'))
    const data = snap.val()
    const allUsers = Object.values(data)

    return {
      count: allUsers.length,
      avarage:
        allUsers.reduce((prev, current) => {
          return (
            prev +
            Object.values(current).reduce(
              (_prev, _current) => _prev + _current,
              0
            )
          )
        }, 0) / allUsers.length
    }
  } catch (error) {
    console.error(error)
    alert('Bilinmeyen bir hata oluştu.')
    return false
  }
}
