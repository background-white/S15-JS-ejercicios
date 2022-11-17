//Tarea asincrona
//ejercicio 1
//Sueldo basico+bonificacion
/*
let nombreT=prompt("Ingresa tu nombre");

let sueldoT=+prompt("Ingresa tu sueldo");

let hijosT=+prompt("Ingresa el numero de hijos que tienes");

let bonificacion=(sueldoT*0.07).toFixed(0);
if(hijosT>0){
  document.write(`Hola ${nombreT}, te corresponde un 7% de bonificacion del sueldo básico: ${bonificacion} <br> el total de tu sueldo es: ${sueldoT+Number(bonificacion)}`);
}else{
  document.write(`Hola ${nombreT}, no te corresponde bonificacion, por lo tanto tu sueldo es: ${sueldoT}`);
}
*/

//ejercicio 2
//Numero mayor de 500
/*
let numero=+prompt("Ingresa un número");
let numeroM=numero*0.18;

if(numero>500){
  document.write(`El 18% de ${numero} es: ${numeroM}`);
}else{
  document.write(`El numero es menor de 500`);
}
*/

//ejercicio 3
//factorial
/*
let numero=+prompt("Ingresa un número");
let resultado=1;
for (let i = 1; i <= numero; i++) {
  resultado *= i;
}  
document.write(`El factorial de ${numero}! es: ${resultado}`)
*/

//ejercicios ppt

//ejercicio 1
//Numero mayor de 150 compras
/*
let compra=+prompt("Ingresa el importe de la compra");
let descuento=compra*0.12;

if(compra>=150){
  document.write(`Te corresponde un descuento del 12%: ${descuento} <br> 
  Estarias pagando: ${compra-descuento}`);
}else{
  document.write(`No hay descuento por compras menores a 150 <br> 
  Monto a pagar ${compra}`);
}
*/

//ejercicio 2
//Notas examen

let nombreA=prompt("Ingresa tu nombre");
let notaP=+prompt("Ingresa la nota parcial");
let notaF=+prompt("Ingresa la nota final");
let promedioPracticas=+prompt("Ingresa el promedio de las practicas");

let notaFDoble=notaF+notaF;
let promedioF=(notaFDoble+notaP+promedioPracticas)/4;

if(promedioF>11){
  document.write(`El alumno ${nombreA}, fue aprobado con un promedio final de: ${promedioF}`);
}else{
  document.write(`El alumno ${nombreA} no aprobo`)
}
