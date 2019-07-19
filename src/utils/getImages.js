const path = require('path')
const fs = require('fs')

const getImages = (folder) => {
    const directoryPath = path.join(__dirname, `../../public/img/${folder}`)

    fs.readdir(directoryPath, (err, files) => {

        if (err) {
            return console.log(`Unable to scan directory: ${err}`)
        }

        files.forEach((file) => {
            console.log(file)
        })
    })
}

getImages('chatter')