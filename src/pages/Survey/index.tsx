import { Link, useParams } from 'react-router-dom'
import { Loader } from '../../components/Lord'
import { useFetch } from '../../hooks/fetch'

const Survey = () => {

  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber || '0',10) 
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  

  const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)
  const surveyData = data?.surveyData

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      {isLoading ? (
        <Loader />
      ):(
        <>
          <h1>Question {questionNumber}</h1>
          <div>{surveyData[questionNumber||1]}   </div>
          <div>
              <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
              {surveyData[questionNumberInt + 1] ? (
                <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
              ) : (
                <Link to="/results">Résultats</Link>
              )}
          </div>
        </>
      )}
    </div>

  )
}

export default Survey