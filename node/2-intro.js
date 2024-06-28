// Globals(global variables) - No WIndow, No Browser !!!
// which we can use anywhere in our code

// __dirname   - path to current directory
// __filename  - filename
// require     - function to use modules (CommonJs)
// module      - info about current module (file)
// process - info about env where the program is being excuted

console.log(__dirname);
setInterval(() => {
    console.log('Hello World')
}, 2000)