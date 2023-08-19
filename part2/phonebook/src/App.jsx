import { useState } from 'react'
import Part from './components/Part.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('Enter a name:')

  const addPerson = (event) => {
    event.preventDefault()
    console.log(event.target)
    console.log(persons, newName)
    if (persons.map(person => person.name).includes(newName)){
      alert(`${newName} is already added to phonebook`)
    } else{
      const newPerson = {name: newName}
      setPersons(persons.concat(newPerson))
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value = {newName} onChange={handleNameChange}/>
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