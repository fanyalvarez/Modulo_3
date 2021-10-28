const bcrypt = require("bcrypt")
const verifyPassword = async () =>{
	const password = "password123";
	const hash = "";
	const isMatch = await bcrypt.compare(password, hash);

	console.log("is a match?", isMatch);
}

verifyPassword();

