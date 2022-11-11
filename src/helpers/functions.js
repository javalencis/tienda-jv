

export const filterCategory = (products, category) => {
  const nCategory = category.charAt(0).toUpperCase() + category.slice(1)
  return products.filter(product => product.category.name === nCategory)
}

export const filterProductList = (category, products,searchValue) => {

  if (category) {
    products = filterCategory(products, category)
  }



  let listProducts = []
  if (searchValue.length > 1) {
    listProducts = products.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))

  } else {
    listProducts = products
  }

  return listProducts

}


export const findProduct =(id,products)=>{

  let index = products.findIndex(product => product.id === id)

  return index

}