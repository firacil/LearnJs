const { log } = require('console')
const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result)=> {
    if (err) {
        log(err)
        return
    }
    first = result
    readFile('./content/second.txt', 'utf8', (err, result)=> {
        if (err) {
            log(err)
            return
        }
        second = result

        writeFile('./content/new-async.txt',
                  `Here is the result: ${first}, ${second}`,
                  (err, result) => {
            if (err) {
                log(err)
                return
            }
            log(result)
        })
    })
})