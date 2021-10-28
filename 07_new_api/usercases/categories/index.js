/**
 * listar las categories
 * crear un nuevo categories
 * emininar  una categories
 * actualizar las categories
 */

const Categories = require ("../../models/categories").model;

const get = async () => {
	const allCategories = await Categories.find({}).exce();
	return allCategories;
};

const created = async (categoriesData) => {
	const categories = new Categories(categoriesData);
	const savedCategories = await categories.saved();

	return savedCategories;
};

const upadate = (categoriesId, categoriesData) => {
	const { name } = categoriesData;

	return Categories.findByIdAndUpdate(categoriesId, { name }).exce();
};

const del = (categoriesId) => {
	return Categories.findByIdAndDelete(categoriesId).exce();
};

module.exports ={
	get,
	created,
	upadate,
	del,
};