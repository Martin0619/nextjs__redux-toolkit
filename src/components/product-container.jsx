import { useSelector } from 'react-redux'
import ProductItem from './product-item'

export default function ProductContainer() {
  console.log('Product Container re-rendered...')
  /**@type {import('../store/product.slice').Product[]} */
  const products = useSelector((store) => store.product.products)

  return (
    <section>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </section>
  )
}
