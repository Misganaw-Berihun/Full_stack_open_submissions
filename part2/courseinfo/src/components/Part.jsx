const Part = (props) => {
    console.log('inside part')
    console.log(props)
    
    return (
      <>
        <p>
          {props.part.name} {props.part.exercises}
        </p>
      </>
    )
  }

  export default Part