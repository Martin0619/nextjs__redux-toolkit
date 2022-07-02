import { useDispatch } from 'react-redux'
import { favorite } from '../store/product.slice'

/**
 * @typedef Props
 * @property {import('../store/product.slice').Product} product
 */
/**
 *
 * @param {Props} props
 */
export default function ProductItem({ product }) {
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Name: {product.name}</h2>
      <h4>Description: {product.description}</h4>
      <p>Price: {product.price}</p>
      <p>Is Favorite: {product.favorite ? 'true' : 'false'}</p>
      <button onClick={() => dispatch(favorite(product.id))}>Favorite</button>
    </div>
  )
}
