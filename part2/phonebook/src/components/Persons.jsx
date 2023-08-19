const Persons = ({persons}) => {
    return (
        persons.map(person => <p>{person.name} {person.phone}</p>)
        )
}

export default Persons