


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';


function App() {

  const Router = createBrowserRouter([
    { path:'/', element:<Layout/>, errorElement: <ErrorPage/>, children:[
        {index:true , element :<Home/>},
        {path:'/cart', element: <Cart/>},
        {path:'/order', element: <PlaceOrder/>},
    ]}
])

  return (
    <>
      <div className="app">
      
        <RouterProvider router={Router}/>

      </div>

    </>
  )
}

export default App
