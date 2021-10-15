//1. medir espacio			1 seg
//2. comprar material		2 seg
//3. hacer esqueleto		2 seg
//4. hacer mezcla			3 seg
//5. poner ladrillos		3 seg
//6. aplanado				4 seg
//7. pintar muro			2 seg

const medirESpacio = (callback) => {
	setTimeout(() => {
		callback()
	}, 1000)
}

const comprarMaterial = (callback) => {
	setTimeout(() => {
		callback()
	}, 2000)
}

const hacerEsqueleto = (callback) => {
	setTimeout(() => {
		callback()
	}, 2000)
}

const hacerMezcla = (callback) => {
	setTimeout(() => {
		callback()
	}, 3000)
}

const ponerLadrillos = (callback) => {
	setTimeout(() => {
		callback()
	}, 3000)
}

const aplanado = (callback) => {
	setTimeout(() => {
		callback()
	}, 4000)
}

const pintarMuro = (callback) => {
	setTimeout(() => {
		callback()
	}, 2000)
}


const construirMuro = () => {
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
construirMuro()
construirMuro()
construirMuro()
construirMuro()