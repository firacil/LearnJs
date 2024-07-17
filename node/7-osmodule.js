// os is one of builtin modules of js
// can access many methods from os

const os = require('os')

// lets see user info
const user = os.userInfo()
console.log(user)

// lets check uptime of machine
console.log(os.uptime())

const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)
