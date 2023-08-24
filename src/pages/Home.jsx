import { useSelector } from 'react-redux'
import NavBar from '../components/NavBar'
import Product from '../components/Product'

const Home = () => {
  const state = useSelector(state => state.products)

  return (
    <>
      <NavBar />
      <Product product={state.products[state.selectedProduct]}/>
    </>
  )
}

export default Home
