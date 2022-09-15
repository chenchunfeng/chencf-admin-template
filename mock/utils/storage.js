const fs = require('fs')
const path = require('path')

const setItem = (key, value) => {
  fs.writeFile(
    path.resolve(__dirname, `../data/${key}.json`),
    JSON.stringify(value),
    (err) => {
      console.log(err)
    }
  )
}

const getItem = (key) => {
  return fs
    .readFileSync(path.resolve(__dirname, `../data/${key}.json`))
    .toString()
}

const removeItem = (key) => {
  fs.writeFile(
    path.resolve(__dirname, `../data/${key}.json`),
    JSON.stringify(null),
    (err) => {
      console.log(err)
    }
  )
}

const hasItem = (key) => {
  const jsonStr = fs
    .readFileSync(path.resolve(__dirname, `../data/${key}.json`))
    .toString()
  return !!jsonStr
}

module.exports = {
  setItem,
  getItem,
  removeItem,
  hasItem
}
