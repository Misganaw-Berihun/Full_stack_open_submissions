const express = require('express')
// const cors = require('cors')
app = express()


app.use(express.json())
// app.use(cors())
let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (req, res) => {
    res.json(persons);
}) 

app.get('/info', (req, res) => {
    const d = new Date();
    res.send(
        `
        <div>
            <p>Phonebook has info for ${persons.length} people</p>
            <p>${d}</p>
        </div>
        `)

})

const generateId = () => {
    const MAXRANGE = 1000000;
    const id = Math.floor(Math.random()*MAXRANGE + 1);
    return id;
}

app.post('/api/persons', (req, res) => {
    const body = req.body 


    if (!body.name || !body.number){
        return res.status(400).json({
            error: 'name or number is missing'
        })
    } 
    
    const names = persons.map(p => p.name)
    if (names.includes(body.name)){
        return res.status(409).json({
            error: 'Name must be unique'
        })
    } 

    const id = generateId()
    body.id = id
    persons = persons.concat(body)
    console.log(persons)
    res.json(body)
})


app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    console.log(id, person)
    if (!person){
        res.status(404).end()
    }else{
        res.json(person)
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    console.log(id)
    persons = persons.filter(p => p.id !== id)
    console.log(persons)
    res.status(204).end()
})

PORT = 3001
app.listen(PORT,() => {
    console.log(`Listening at port ${PORT}`)
})