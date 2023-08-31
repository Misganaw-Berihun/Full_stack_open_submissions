const mongoose = require('mongoose')

if (process.argv.length < 3){
    console.log("Password is required")
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://misganawbmb:${password}@cluster0.d8nraay.mongodb.net/Phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)


switch(process.argv.length){
    case 4:
        console.log("phone number is required")
        exit(1)
        break;
    case 3:
        Person.
        find({}).
        then(
            persons => {
                persons.forEach(person => {
                    console.log(person)
                })
            mongoose.connection.close()
        })
        break
    default:
        const name = process.argv[3]
        const number = process.argv[4]

        const person = new Person({
            name: name,
            number: number,
        })

        person.save().then(result => {
            console.log('Person saved')
            mongoose.connection.close()
        })
}


