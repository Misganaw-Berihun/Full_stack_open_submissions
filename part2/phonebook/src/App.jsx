import { useState, useEffect } from 'react'
import Persons from './components/Persons.jsx'
import Filter from './components/Filter.jsx'
import axios from 'axios'
import PersonForm from './components/PersonForm.jsx'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('Enter a name:')
  const [newPhone, setNewPhone] = useState('Enter phone: ')
  const [searchName, setSearchName] = useState('')
   
  useEffect(() => {
    console.log('effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('setting persons ...')
      setPersons(response.data)
    })
  }, [])
  
  const addPerson = (event) => {
    event.preventDefault()
    console.log(event.target)
    console.log(persons, newName)
    if (persons.map(person => person.name).includes(newName)){
      alert(`${newName} is already added to phonebook`)
    } else{
      const newPerson = {name: newName, number: newPhone}
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
      search: <Filter value = {searchName} handleOnChange={handleSearchChange}/>
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