/* Simulador de calculo de total a pagar de los sueldos de los empleados

    Se ingresan datos de los empleados de una empresa. Por cada empleado se ingresa:

    •  Legajo (entero entre 1000 y 5000)
    •  Sueldo básico (float mayor a 1000)
    •  Antigüedad en años (mayor o igual a 0)
    •  Categoría (entero entre 1 a 5)

    Por cada empleado ingresado se debe calcular el sueldo final a abonar sabiendo que:

    •  Las Categorías 2 y 3 tienen $500 de bonificación.
    •  La Categoría 4 tiene 10% de bonificación.
    •  La Categoría 5 tiene 30% de bonificación.
    •  Si la antigüedad es mayor a 10 años recibe una bonificación del 10% adicional.

    Se calcula total a pagar.
*/


const calculoDeSueldos = () => {
    let legajo = 0;
    let sueldoBasico = 0;
    let antiguedadEnAnios = 0;
    let categoria = 0;
    let totalSueldo = 0;
    let bonificacion = 0;
    let seguirIngresando = false;

    do {
        legajo = parseInt(prompt("Ingrese legajo del empleado"));
        validarLegajo(legajo);
        sueldoBasico = parseFloat(prompt("Ingrese sueldo basico"));
        validarSueldoBasico(sueldoBasico);

        antiguedadEnAnios = parseInt(prompt("Ingrese antiguedad (En años)"));
        validarAntiguedad(antiguedadEnAnios);

        categoria = parseInt(prompt("Ingrese categoria (Del 1 a 5)"));
        validarCategoria(categoria);
        
        bonificacion = calcularBonifacion(sueldoBasico, categoria, antiguedadEnAnios);
        
        totalSueldo += sueldoBasico + bonificacion;
    
        seguirIngresando = confirm("¿Queres seguir ingresando datos?");
    } while (seguirIngresando);

    return totalSueldo;
}

const validarLegajo = (legajo) => {
    while (Number.isNaN(legajo) || (legajo < 1000 || legajo > 5000) ) {
        alert("Deber ingresar un legajo entre 1000 y 5000.");
        legajo = parseInt(prompt("Ingrese legajo del empleado"));
    }
}

const validarSueldoBasico = (sueldoBasico) =>{
    while (Number.isNaN(sueldoBasico) || sueldoBasico < 0) {
        alert("Debe ingresar un sueldo mayor a 0");
        sueldoBasico = parseFloat(prompt("Ingrese sueldo basico"));
    }
}

const validarAntiguedad = (antiguedadEnAnios) =>{
    while (Number.isNaN(antiguedadEnAnios) || antiguedadEnAnios < 0) {
        alert("Debe ingresar antiguedad en años y mayor a 0.")
        antiguedadEnAnios = parseInt(prompt("Ingrese antiguedad (En años)"));
    }
}

const validarCategoria = (categoria) =>{
    while (Number.isNaN(categoria) || (categoria < 1 || categoria > 5) ) {
        alert("Deber ingresar un legajo entre 1 y 5.");
        categoria = parseInt(prompt("Ingrese categoria (Del 1 a 5)"));
    }
}

const calcularBonifacion = (sueldoBasico, categoria, antiguedadEnAnios) => {
    let bonificacion = 0;

    if(categoria  == 2 || categoria == 3){
        bonificacion = 500;
    }

    if(categoria == 4){
        bonificacion = sueldoBasico * 0.10; // 10% de bonificacion
    }

    if(categoria == 5){
        bonificacion = sueldoBasico * 0.30; // 30% de bonificacion
    }

    if(antiguedadEnAnios > 10){
        bonificacion += sueldoBasico * 0.10 // 10% adicional por antiguedad
    }

    return bonificacion;
}

let totalAPagar = calculoDeSueldos();

alert("Cantidad total a pagar de sueldos: " + totalAPagar);