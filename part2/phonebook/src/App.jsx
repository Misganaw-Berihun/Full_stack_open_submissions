import { useState } from 'react'
import Persons from './components/Persons.jsx'
import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForm.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('Enter a name:')
  const [newPhone, setNewPhone] = useState('Enter phone: ')
  const [searchName, setSearchName] = useState('')
   

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


  const handleSearchChange = (event) => {
    const target = event.target.value 
    console.log(target)
    setSearchName(target)
  }

  const end = searchName.length
  const personsToShow = end != 0 
    ? persons.filter(field => field.name.slice(0, end).toLowerCase() === searchName.toLowerCase()) 
    : persons 


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value = {searchName} handleOnChange={handleSearchChange}/>
      <PersonForm 
        addPerson={addPerson} 
        newName = {newName} 
        handleNameChange = {handleNameChange} 
        newPhone={newPhone} 
        handlePhoneChange={handlePhoneChange} 
      />
      <h2>Numbers</h2>
      <Persons persons = {personsToShow} />
    </div>
  )
}

export default App