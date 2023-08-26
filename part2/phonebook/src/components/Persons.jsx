import newServices from '../services/persons'
const Persons = ({persons, setPersons, setSuccess}) => {

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
            setSuccess(`${person.name} is removed from the db succesfully`)
            setPersons(persons.filter(person => person.id !== id))
            setTimeout(() => {
              setSuccess(null);
            }, 5000)
          }
        )
        .catch( 
          error => {
            setError(`Error removing ${person.name}`)
            setTimeout(() => {
              setError(null)
            }, 5000)
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