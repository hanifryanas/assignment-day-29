const db = require('./db')

const crateMember = `
    CREATE TABLE users(
        id INTEGER PRIMARY KEY,
        username TEXT PRIMARY KEY,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        phone TEXT NOT NULL,
        userStatus INTEGER NOT NULL
    )
`

db.serialize(() => {
    db.run(crateMember, (err) => {
        if (!err) {
            console.log('table created')
        } else {
            console.log(err)
        }
    })
})