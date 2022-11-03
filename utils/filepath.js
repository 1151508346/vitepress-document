const fs = require('fs')
const path = require('path')
const gitPath = fs.readdirSync(path.join(__dirname, '../docs/assets/git'))
console.log(gitPath)