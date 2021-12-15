const argv = require('./config/yargs')
const { crearArchivo } = require('./helpers/multiplicar');



console.clear()

/* To receive arguments from the console manually (not recommended)
const [,, arg3 = "base=5" ] = process.argv;
const [, base = 5 ] = arg3.split("=");
console.log(base);*/

// console.log(process.argv)
// console.log(argv)
// console.log('base: yargs', argv.base )

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))