const Header = (props) => {
  console.log('inside Header')
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log('inside part')
  console.log(props)
  
  return (
    <>
      <p>
        {props.part.partNum} {props.part.excercise}
      </p>
    </>
  )
}

const Content = (props) => {
  console.log('inside content')
  console.log(props)
  return (
    <>
      <Part part = {props.parts[0]}/>
      <Part part = {props.parts[1]}/>
      <Part part = {props.parts[2]}/>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p> 
        Number of excercises is {props.total}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content parts = {
                  [
                    {partNum: part1, excercise: exercises1}, 
                    {partNum: part2, excercise: exercises2}, 
                    {partNum: part3, excercise: exercises3}
                    ]
                    } />
      <Total total = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App