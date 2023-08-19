const Part = ({persons}) => {
    return (
        persons.map(person => <p>{person.name} {person.phone}</p>)
        )
}

export default Part