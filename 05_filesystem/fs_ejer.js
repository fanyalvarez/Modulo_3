const fs = require("fs")

const newDir = async ()=>{
	fs.mkdir(`${__dirname}/otro_directorio`, (err) => {
		if (err) {
			console.error("no se pudo crear el directorio", err)
		}
	})
}

const newFile = async ()=>{
	fs.writeFile(
		`${__dirname}/otro_directorio/archivo_nuevo.txt`,
		"Hola Koders 😊",
		(error) => {
			if (error) {
				console.error("No se pudo escribir el archivo", error);
			}
		})
}

const readFile = async ()=>{
	fs.readFile(`archivo_nuevo.txt`, (err, file) => {
		if (err) {
			console.log("No se pudo leer:", err)
		} else {
			console.log("El mensaje es:", file.toString())
		}
	})
}


const main = async () => {
	await newDir();
	await newFile();
	await readFile()
}