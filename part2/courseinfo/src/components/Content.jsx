import Part from './Part';
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
  
export default Content  