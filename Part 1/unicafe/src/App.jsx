import { useState } from 'react'

const StatisticLine = (props) => {
  console.log(props)
  return (
    <div>
      {props.text} {props.text === 'positive'? `${props.value} %` : props.value}
    </div>
  )
}

const Statisitcs = (props) => {
  console.log(props)
  if (props.total === 0){
    return (
      <div>
        No feedback given
      </div>
    )
  } else{
    return (
      <div>
        <StatisticLine text = 'good' value = {props.good}/>
        <StatisticLine text = 'neutral' value = {props.neutral}/>
        <StatisticLine text = 'bad' value = {props.bad}/>
        <StatisticLine text = 'total' value = {props.total}/>
        <StatisticLine text = 'average' value = {props.average}/>
        <StatisticLine text = 'positive' value = {props.positive}/>
      </div>
    )
  }
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
      <Statisitcs good = {good} bad = {bad} neutral = {neutral} total = {total} average = {average} positive = {positiveFeedbackPercentage} />
    </div>
  )
}

export default App