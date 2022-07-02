import { useDispatch, useSelector } from 'react-redux'
import ProductContainer from '../components/product-container'
import { addTotal } from '../store/product.slice'

export default function Home() {
  return (
    <>
      <ProductContainer />
      <ProductTotal />
    </>
  )
}

const ProductTotal = () => {
  console.log('Product Total re-rendered...')
  const total = useSelector((store) => store.product.productTotal)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Product Total: {total}</h1>
      <button onClick={() => dispatch(addTotal())}>Add to Total</button>
    </>
  )
}
