

export const filterCategory = (products, category) => {
  const nCategory = category.charAt(0).toUpperCase() + category.slice(1)
  return products.filter(product => product.category.name === nCategory)
}