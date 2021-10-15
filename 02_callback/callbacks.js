//--------funcion normal--------------
const prueba = ("este es un proceso normal")

console.log("iniicando")
console.log(prueba)
console.log("terminado")


//--------funcion asincrona--------------
/*console.log("------------------")
const asyncFunction = () => {
	setTimeout(() =>{
		console.log ("este es un proceso asincrono")
	},3000) //tresmil milisegundos
}
console.log("iniicando")

asyncFunction()

console.log("terminado")
*/

//--------procesando una funcion asincrona correctamente--------------
console.log("------------------")
const validanadoData = (callback) => {
	console.log("Validando informacion")

	setTimeout(() =>{
		callback()
	},3000) //tresmil milisegundos
}

console.log("iniicando")

validanadoData(()=>{
	console.log("terminado")
})