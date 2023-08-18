const Total = ({parts}) => {
    console.log('parts:', parts)
    return (
      <>
        <p> <b>
          total of {parts.reduce((sum, part) => sum + part.exercises, 0)} excercises
          </b>
        </p>
      </>
    )
  }

export default Total