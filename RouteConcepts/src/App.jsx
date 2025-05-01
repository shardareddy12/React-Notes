import {createBrowserRouter, RouterProvider,Navigate} from "react-router-dom";
import './App.css'
import Layout from './Components/Layout'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Login from './Components/Login'


function App() {
  let router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[ {
        path:'',
        element:<Home />
      },
      {
        path:'Contact',
        element:<Contact />
      },
      {
        path:'About-us',
        element:<About />
      }]
    },
    {
      path:'Login',
      element:<Login/>
    },
    {
      path:'*',
      element:<Navigate to='/' />   
      //if wrong link type navigate to default home page or we can add pagenotfound.jsx compnent.
    }
   
  ])

  return (
    <>
      <RouterProvider router={router} />
      
      
    </>
  )
}

export default App
