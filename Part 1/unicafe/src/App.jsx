import { useState } from 'react'
const Display = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.text} {props.count}
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

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button type = 'good' handleOnClick = {incrementGood}/ >
      <Button type = 'neutral' handleOnClick = {incrementNeutral}/ >
      <Button type = 'bad' handleOnClick = {incrementBad}/ >
      <h1>statistics</h1>
      <Display text = 'good' count = {good} />
      <Display text = 'neutral' count = {neutral} />
      <Display text = 'bad' count = {bad} />
    </div>
  )
}

export default App