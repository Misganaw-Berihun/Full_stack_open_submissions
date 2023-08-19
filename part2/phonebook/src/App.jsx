import { useState } from 'react'
import Part from './components/Part.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('Enter a name:')
  const [newPhone, setNewPhone] = useState('Enter phone: ')

  const addPerson = (event) => {
    event.preventDefault()
    console.log(event.target)
    console.log(persons, newName)
    if (persons.map(person => person.name).includes(newName)){
      alert(`${newName} is already added to phonebook`)
    } else{
      const newPerson = {name: newName, phone: newPhone}
      setPersons(persons.concat(newPerson))
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value = {newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value = {newPhone} onChange = {handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Part persons = {persons} />
    </div>
  )
}

export default App