import newServices from '../services/persons'
const Persons = ({persons, setPersons}) => {

    const onDelete = (id) => {
        console.log("on delete")
        const person = persons.find(person => person.id === id)
        if (confirm(`Delete ${person.name} ?`)){
        newServices 
        .deletePerson(id)
        .then(
          response => {
            console.log(response)
            // setPersons(persons.filter(person => person.id !== id))
            setPersons(persons.filter(person => person.id !== id))
          }
        )
        }
      }

    return (
        <ul>
            {
            persons
            .map(person => 
                <div>
                    <li key = {person.id}>{person.name} {person.number}</li>
                    <button onClick = {() => onDelete(person.id)}>Delete</button>
                </div>
            )
            }
        </ul>
        )
}

export default Persons