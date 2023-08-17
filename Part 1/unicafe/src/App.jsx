import { useState } from 'react'
const Display = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.text} {props.value} {props.unit}
      </p>
    </div>
  )
}

const Button = (props) => {
  console.log(props)
  return (
    <>
      <button onClick={props.handleOnClick}>
        {props.type}
      </button>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positiveFeedbackPercentage, setPositiveFeedbackPercentage] = useState(0)

  const incrementGood = () => {
    let updateGood = good + 1;
    let total = updateGood + bad + neutral;
    let avg = (updateGood - bad) / total;
    let posFeedbackPercent = (updateGood * 100) / total; 

    setGood(updateGood)
    setTotal(total)
    setAverage(avg);
    setPositiveFeedbackPercentage(posFeedbackPercent);
  }
  const incrementNeutral = () => {
    let updateNeutral = neutral + 1
    let total = updateNeutral + bad + good;
    let avg = (good - bad) / total;
    let posFeedbackPercent = (good * 100) / total;

    setNeutral(updateNeutral)
    setTotal(total)
    setAverage(avg);
    setPositiveFeedbackPercentage(posFeedbackPercent);
  }
  const incrementBad = () => {
    let updatedBad = bad + 1;
    let total = updatedBad + good + neutral;
    let avg = (good - updatedBad) / total;
    let posFeedbackPercent = (good * 100) / total;

    setBad(updatedBad);
    setTotal(updatedBad + neutral + good);
    setAverage(avg);
    setPositiveFeedbackPercentage(posFeedbackPercent);
  }
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button type = 'good' handleOnClick = {incrementGood}/ >
      <Button type = 'neutral' handleOnClick = {incrementNeutral}/ >
      <Button type = 'bad' handleOnClick = {incrementBad}/ >
      <h1>statistics</h1>
      <Display text = 'good' value = {good} unit = ''/>
      <Display text = 'neutral' value = {neutral} unit = ''/>
      <Display text = 'bad' value = {bad} unit = ''/>
      <Display text = 'all' value = {total} unit = ''/>
      <Display text = 'average' value = {average} unit = ''/>
      <Display text = 'positive' value = {positiveFeedbackPercentage} unit = '%'/>
    </div>
  )
}

export default App