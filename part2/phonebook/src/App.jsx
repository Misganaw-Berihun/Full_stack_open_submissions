import { useState, useEffect } from 'react'
import Persons from './components/Persons.jsx'
import Filter from './components/Filter.jsx'
import newServices from './services/persons.js'
import PersonForm from './components/PersonForm.jsx'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('Enter a name:')
  const [newPhone, setNewPhone] = useState('Enter phone: ')
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    console.log('effect')
    newServices. 
    getAll(). 
    then(initialPersons => setPersons(initialPersons))
  }, [])

  
  const addPerson = (event) => {
    event.preventDefault()
    console.log(event.target)
    console.log(persons, newName)
    const person = persons.find(person => person.name === newName)
    if (person){
      if (!confirm(`${person.name} is already added to phonebook, replace the old number with a new one`)){
        return
      }
      const id = person.id
      newServices 
      .update(person, newPhone)
      .then(
        returnedResult => {
          setPersons(
            persons
            .map(
              p => p.id != id ? p : returnedResult
              )
            )
        } 
      ) 
    } else{
      const newPerson = {name: newName, number: newPhone}
      console.log("newPerson:",newPerson)
      newServices 
      .create(newPerson) 
      .then( 
        returnedResult => {
          console.log('returned',returnedResult)
          setPersons(persons.concat(returnedResult))
        }
      )
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
      <Persons persons = {personsToShow} setPersons={setPersons}/>
    </div>
  )
}

export default App