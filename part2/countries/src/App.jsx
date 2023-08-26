import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [value, setValue] = useState(null)
  const [countries, setCountries] = useState([])

  useEffect(() => {

    console.log("In Effect")
    console.log(value)
    axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/name/finland')
    .then(response => {
      console.log(response.data)
    })
  }, [value])

  const handleOnChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <div>
        find countries: <input value = {value} onChange = {handleOnChange} />

    </div>
  )
}

export default App
