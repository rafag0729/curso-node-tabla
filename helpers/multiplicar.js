require('colors');
const fs = require('fs');


const crearArchivo = async( base = 5, list = false, hasta = 10 ) => {

    let salida = "";

    for(let i = 1; i <= hasta; i++){
        salida += `${base} x ${i} = ${base*i}\n`;
    }

    if(list){
        console.log("======================".green)
        console.log("     Tabla del: ".bgGreen, base.toString())
        console.log("======================".green)

        console.log(salida.rainbow)
    }
    

    /* fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        if(err) throw err;

        console.log(`tabla-${base}.txt guardada!`);
    }) */

    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}