//1. medir espacio			1 seg
//2. comprar material		2 seg
//3. hacer esqueleto		2 seg
//4. hacer mezcla			3 seg
//5. poner ladrillos		3 seg
//6. aplanado				4 seg
//7. pintar muro			2 seg

const medirESpacio = (wallNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`se midio el espacio para el muro ${wallNumber}`)
			resolve(wallNumber)
		}, 1000)
	})
}

const comprarMaterial = (wallNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`se compro el material para el muro ${wallNumber}`)
			resolve(wallNumber)
		}, 2000)
	})
}

const hacerEsqueleto = (wallNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`se construyo el esqueleto ${wallNumber}`)
			resolve(wallNumber)
		}, 2000)
	})
}

const hacerMezcla = (wallNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`se hizo la mezcla ${wallNumber}`)
			resolve(wallNumber)
		}, 2000)
	})
}

const ponerLadrillos = (wallNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (wallNumber == 1) {
				console.log(`se colocaron los ladrillos ${wallNumber}`)
				resolve(wallNumber)
			} else {
				reject(`no se pudo relaizar proceso de ladrillos ${wallNumber}`)
			}
		}, 2000)
	})
}

const hacerAplanado = (wallNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`se hizo el aplanado del muro ${wallNumber}`)
			resolve(wallNumber)
		}, 2000)
	})
}

const pintarMuro = (wallNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`se termino de pintar el muro ${wallNumber}`)
			resolve(wallNumber)
		}, 2000)
	})
}
medirESpacio(1)
	.then(comprarMaterial)
	.then(hacerEsqueleto)
	.then(hacerMezcla)
	.then(ponerLadrillos)
	.then(hacerAplanado)
	.then(pintarMuro)
	.catch((error) => {
		console.error("error", error)
	})
	.finally(() => {
		console.log("Proceso terminado")
	})

medirESpacio(2)
	.then(comprarMaterial)
	.then(hacerEsqueleto)
	.then(hacerMezcla)
	.then(ponerLadrillos)
	.then(hacerAplanado)
	.then(pintarMuro)
	.catch((error) => {
		console.error("error", error)
	})
	.finally(() => {
		console.log("Proceso terminado")
	})

/*const construirMuro = () => {
	medirESpacio(() => {
		console.log("ya termine de medir el espacio")
		comprarMaterial(() => {
			console.log("material comprado")
			hacerEsqueleto(() => {
				console.log("esqueleto terminado")
				hacerMezcla(() => {
					console.log("mezcla lista")
					ponerLadrillos(() => {
						console.log("ladriallos puestsos")
						aplanado(() => {
							console.log("termine el aplanado")
							pintarMuro(() => {
								console.log("termine de pintar")
							})
						})
					})
				})
			})
		})
	})

}
console.log("iniciando obra")
construirMuro()*/

