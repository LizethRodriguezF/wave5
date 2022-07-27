const { products } = require("./utils/products");




// 1. Agregarle un id único a cada producto empezando en 1.
// 2. Retornar el nombre de cada uno de los productos.
// 3. Retornar el producto con el id 3.
// 4. Retornar los productos con color “black”.
// 5. Retornar los productos que no tienen color.
// 6. Agregar un producto nuevo al array con las mismas propiedades de los productos ya existentes.
// 7. Eliminar del array los productos fuera de stock.
// 8. Retornar la sumatoria del stock de todos los productos.
// 9. Retornar los productos con un precio mayor a un importe determinado.

/************************************************************************************
PUNTO 1
utiliza addingIdToProduct para agregarle un id único a cada producto empezando en 1
*************************************************************************************/
// Tu código acá

function addingIdToProduct () { 
	return products.map((product, i) => {
    	return {id: i + 1, ...product}
	})
}

/*****************************************************************************
 * PUNTO 2
 * utiliza returningTheNames para retornar el nombre de cada uno de los productos
 ******************************************************************************/
// Tu código acá

function returningTheNames (){ 
	return products.map((product) => {
		return product.name
	})
}

/********************************************************************************
PUNTO 3
utiliza searchID para retornar el producto cuyo id corresponda al parametro pasado.
Si ejecuto searchID(3) debería devolver el objeto entero, cuyo id sea 3
************************************************************************************/
// Tu código acá


function searchID(id){ 
	const resultado = addingIdToProduct().filter(product => product.id === id)
	if (resultado.length > 0) {
		return resultado[0]
	} else {
		return "no hubo coincidencias"
	}
}

/*****************************************************************************
PUNTO 4
utiliza matchingColors para retornar los productos que hagan match con 
el color pasado por parámetro
******************************************************************************/
// Tu código acá


function matchingColors(color){ 
	return addingIdToProduct().filter(product => product.colors.includes(color))
}


/*****************************************************************************
PUNTO 5
utiliza colorsLength para retornar los productos que no tengan color
******************************************************************************/
// Tu código acá

function colorsLength(){ 
	return addingIdToProduct().filter(product => product.colors.length === 0)
}


/*****************************************************************************
PUNTO 6
utiliza addProduct para agregar un nuevo producto que contenga las mismas
propiedades (name,price,quantity,colors).
Retornar los productos donde se incluya el producto agregado
******************************************************************************/
// Tu código acá

function addProduct(){ 
	products.push({
		name: "Benito",
		price: 100,
		quantity: 5,
		colors: ["black", "white"],
	});
	return products.length
}

/*****************************************************************************
PUNTO 7
utiliza deleteProduct para Eliminar del array de productos a aquellos sin stock (con quantity 0)
******************************************************************************/
// Tu código acá

function deleteProduct(){ 
	products.filter((product) => product.quantity === '')
	return products
}


/*****************************************************************************
PUNTO 8
utiliza existingProducts para sumar el numero total de stock entre todos los productos.
Debe retornar dicho numero
******************************************************************************/
// Tu código acá


function existingProducts(){ 
	products.map(product => product.quantity).reduce((prev, curr) => prev + curr, 0);
	return products
}

/*****************************************************************************
PUNTO 9
utiliza showHigherPrice para retornar los productos cuyo importe sea mayor al pasado por parametro
Esta función recibe el array de productos y el importe (precio) a buscar:
showHigherPrice(products,500) 
debería devolver 2 objetos, ya que solo 2 productos tienen un valor mayor a 500
******************************************************************************/
// Tu código acá
let showHigherPrice;

module.exports = {
	addingIdToProduct,
	existingProducts,
	deleteProduct,
	addProduct,
	colorsLength,
	matchingColors,
	searchID,
	returningTheNames,
	showHigherPrice,
};
