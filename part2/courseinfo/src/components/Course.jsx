import  Header from './Header';
import Content from './Content';

const Course = ({course}) => {
    console.log('inside Course')
    console.log(course)
    return (
      <div>
        <Header course = {course.name}/>
        <Content parts = {course.parts}/>
      </div>
    )
  }

export default Course