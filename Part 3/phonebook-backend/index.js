require('dotenv').config()
const express = require('express')
const Person = require('./models/person')
// const cors = require('cors')
const app = express()


app.use(express.json())
// app.use(cors())
let persons = [
    {
        'id': 1,
        'name': 'Arto Hellas',
        'number': '040-123456'
    },
    {
        'id': 2,
        'name': 'Ada Lovelace',
        'number': '39-44-5323523'
    },
    {
        'id': 3,
        'name': 'Dan Abramov',
        'number': '12-43-234345'
    },
    {
        'id': 4,
        'name': 'Mary Poppendieck',
        'number': '39-23-6423122'
    }
]

const updateData = (id, req, res, next) => {
    console.log(req.body)
    const {name, number} = req.body
    console.log('id', id)

    const person = { name, number }

    Person.findByIdAndUpdate(id, person, {new: true, runValidators: true, context: 'query'})
        .then(updatedPerson => {
            res.json(updatedPerson)
        })
        .catch(error => next(error))
}

app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
        res.json(persons)
    })
})

app.get('/info', (req, res) => {
    const d = new Date()
    res.send(
        `
        <div>
            <p>Phonebook has info for ${persons.length} people</p>
            <p>${d}</p>
        </div>
        `)

})

app.post('/api/persons', (req, res, next) => {
    const body = req.body

    console.log(req.body)
    Person.findOne({name: body.name})
        .then(result => {
            if (result){
                console.log('Record found')
                console.log('result:', result)
                updateData(result.id, req, res, next)
            } else {
                console.log(body)
                const person = new Person({
                    name: body.name,
                    number: body.number
                })
                person.save()
                    .then(result => {
                        res.json(result)
                    })
                    .catch(error => next(error))
            }
        })
        .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
    updateData(req.params.id, req, res, next)
})


app.get('/api/persons/:id', (req, res, next) => {
    const id = req.params.id
    Person.findById(id)
        .then(result => {
            if (result){
                res.json(result)
            } else{
                res.status(404).end()
            }
        })
        .catch(error => {
            console.log(error)
            return next(error)
        })
})

app.delete('/api/persons/:id', (req, res, next) => {
    const id = req.params.id
    console.log(id)
    Person.findByIdAndRemove(id)
        .then(() => {
            res.status(204).end()
        })
        .catch(error => next(error))
})


const errorHandler = (error, req, res, next) => {
    console.log(error.message)

    if (error.name ==='CastError'){
        return res.status(400).send({error: 'malformatted id'})
    } else if (error.name ==='ValidationError'){
        return res.status(400).send({error: error.message})
    }

    next(error)
}

app.use(errorHandler)

const unknownEndPoint = (req, res) => {
    res.status(500).json({error: 'Something went wrong'})
}

app.use(unknownEndPoint)
const PORT = process.env.PORT
app.listen(PORT,() => {
    console.log(`Listening at port ${PORT}`)
})