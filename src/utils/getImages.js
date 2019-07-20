const path = require('path')
const fs = require('fs')

const getImages = (folder) => {
    const directoryPath = path.join(__dirname, `../../public/img/${folder}`)
    const imgPaths = []
    fs.readdir(directoryPath, (err, files) => {

        if (err) {
            return console.log(`Unable to scan directory: ${err}`)
        }

        files.forEach((file) => {
            imgPaths.push(`img/${folder}/${file}`)
        })
    })
    return imgPaths
}
module.exports = getImages