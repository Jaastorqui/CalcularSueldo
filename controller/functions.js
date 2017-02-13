
exports.checkPost = function(req) {

        let respuesta = {};
        let sueldo = req.params.sueldo;

        let isValido = checkSueldo(sueldo);

        return isValido;
}

        

// Salary must greater than 0 and smaller than 2 000 000
function checkSueldo (sueldo) {

        let isValido = false;

        try {
                sueldo = parseInt(sueldo);

                if (sueldo > 0 && sueldo < 2000000) isValido = true
        }
        catch(ex) { }

        return isValido;
}
