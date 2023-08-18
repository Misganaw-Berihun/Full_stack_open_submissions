import Part from './Part';
const Content = (props) => {
    console.log('inside content')
    console.log(props)
    return (
      <>
        {props.parts.map((part) => <Part part = {part} />)}
      </>
    )
  }
  
export default Content  