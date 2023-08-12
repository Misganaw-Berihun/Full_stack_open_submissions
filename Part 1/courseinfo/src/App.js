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
        {props.part.name} {props.part.excercises}
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
  const course = {
      name: 'Half Stack application development',
      parts: [
      {
        name: 'Fundamentals of React',
        excercises: 10
      },
      {
        name: 'Using props to pass data',
        excercises: 7
      },
      {
        name: 'State of a component',
        excercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts} />
      <Total total = {course.parts[0].excercises + course.parts[1].excercises + course.parts[2].excercises} />
    </div>
  )
}

export default App