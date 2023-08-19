const Part = ({persons}) => {
    return (
        persons.map(person => <p>{person.name}</p>)
        )
}

export default Part