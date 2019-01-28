import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
    {text}
    </button>
)
const Statistic = ({good, neutral, bad, kaikkiPainallukset}) => {
    if (kaikkiPainallukset===0){
        return (
            <div>
                Ei palautteita
            </div>
        )
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                        Hyvä
                        </td>
                        <td>
                         {good}   
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Neutraali
                        </td>
                        <td>
                            {neutral}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Huono
                        </td>
                        <td>
                            {bad}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Keskiarvo
                        </td>
                        <td>
                            {(good-bad)/kaikkiPainallukset}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Yhteeensä
                        </td>
                        <td>
                            {kaikkiPainallukset}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Positiiviset
                        </td>
                        <td>
                            {good/kaikkiPainallukset*100}%
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )

    
}
const App = (props) => {
  // tallenna napit omaan tilaansa

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [kaikkiPainallukset, asetaKaikki]=useState(0)

  const handleGoodClick =() => {
      setGood(good+1)
      asetaKaikki(kaikkiPainallukset+1)
  }

  const handleNeutralClick =() => {
      setNeutral(neutral+1)
      asetaKaikki(kaikkiPainallukset+1)
  }

  const handleBadClick =() => {
      setBad(bad+1)
      asetaKaikki(kaikkiPainallukset+1)
  }

  return (
    <div>
      <h1>anna palautetta</h1>

      <Button
      handleClick={handleGoodClick} 
        text='hyvä'
      />
      <Button
      handleClick={handleNeutralClick}
      text='neutraali'
      />
      <Button
      handleClick={handleBadClick}
      text='huono'
      />

        
      <h1>statistiikka</h1>
      <Statistic good={good} neutral={neutral} bad={bad} kaikkiPainallukset={kaikkiPainallukset} />
     
    </div>
  )

}



ReactDOM.render(<App />, 
  document.getElementById('root')
)
