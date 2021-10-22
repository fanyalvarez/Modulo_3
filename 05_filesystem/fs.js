const { error } = require("console")
const fs = require("fs")

fs.readFile(`README.md`, (err, file) => {
	if (err) {
		console.log("No se pudo leer:", err)
	} else {
		console.log("El mensaje es:", file.toString())
	}
})

console.log(`------------------------------------`)

fs.writeFile(
	`${__dirname}/archivo_nuevo.txt`,
	"Este es un nuevo archivo",
	(error) => {
		if (error) {
			console.error("No se pudo escribir el archivo", error);
		}
	}
);


console.log(`------------------------------------`)
fs.unlink(`${__dirname}/archivo_nuevo`, (err) => {
	if (err) {
		console.error("no se puedo eliminar", err)
	}
})


console.log(`------------------------------------`)

fs.mkdir(`${__dirname}/otro_directorio`, (err) => {
	if (err) {
		console.error("no se pudo crear el directorio", err)
	}
})