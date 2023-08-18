const Total = ({parts}) => {
    console.log('parts:', parts)
    return (
      <>
        <p> 
          total of {parts.reduce((sum, part) => sum + part.exercises, 0)} excercises
        </p>
      </>
    )
  }

export default Total