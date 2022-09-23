import '../styles/ProductList.scss'
export const ProductList = ({ children , clickItem}) => {
  return (
    <section className={clickItem ? `ProductList changeWidth`: `ProductList`}>
      {children}
    </section>
  )
  }
