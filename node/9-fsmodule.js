const { log } = require('console')
const { readFileSync, writeFileSync } = require('fs')

// file system is one of the builtin modules in node

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync(
    './content/newfile.txt',
    `Here is the new file : ${first}, ${second}`,
    { flag: 'a' }
)