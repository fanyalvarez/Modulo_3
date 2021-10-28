/**
 * listar los usuarios
 * ver los detalles por id
 * crear un nuevo user
 * actualizar los detalles del user
 * emininar  un user
 */

const User = require("../../models/users").model;

const get = async () => {
	const allUsers = await User.find({}).exec();
	return allUsers;
};

const getById = async (usersId) => {
	const user = await User.findById(usersId).exec();
	return user;
};

const created = async (userData) => {
	const user = new User(userData);
	const savedUser = await user.saved()

	return savedUser;
}

const updated = (usersId, userData) => {
	const { fisrtName, lastName, usarename, password } = userData

	return User.findByIdAndUpdate(usersId, { fisrtName, lastName, usarename, password }).exec();
};

const del = (usersId) => {
	return User.findByIdAndDelete(usersId).exec();
};

module.exports = {
	get,
	getById,
	created,
	updated,
	del,
};
