import { useSelector } from 'react-redux'
import NavBar from './components/NavBar'
import Product from './components/Product'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    }
  ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
