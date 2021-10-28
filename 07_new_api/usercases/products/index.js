
/**
 * listar los productos
 * ver los detalles por id
 
 * 
 * crear un nuevo producto
 * emininar  un producto
 * actualizar los detalles del producto
 */
const Product = require("../../models/products").model;

const get = async () => {
	const allProducts = await Product.find({}).exec();
	return allProducts;
}
/*por si quiero que maneje limites
const get = async (limit) => {
	const allProducts = await Product.find({}null, {limit: limit}).exec();
	return allProducts;
}
*/

const getById = async (productId) => {
	const product = await Product.findById(productId).exec();
	return product;
};

const created  = async (productData) => {
	//const { name, price } = productData
	const product = new Product( productData );
	const savedProduct = await product.save();

	return savedProduct;
};

const del = (productId) => {
	return Product.findByIdAndDelete(productId).exec()
}

const updated = (productId, productData) => {
	const { name, price } = productData

	return Product.findByIdAndUpdate(productId, { name, price }).exec()
}

module.exports = {
	get,
	getById,
	created,
	del,
	updated,
}