
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Shop from './components/Shop/Shop'
import Order from './components/Order/Order'
import About from './components/About/About'
import Main from './Layout/Main';
import Inventory from './components/Inventory/Inventory';
import { CartAndProductLoader } from './Loaders/Loaders';
import LogIn from './components/LogIn/LogIn';
import SingUp from './components/SingUp/SingUp';
import Shipping from './components/shipping/Shipping';
import PrivateRoutes from './routes/PrivateRoutes';
function App() {
  const router= createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: "/",
          // loader: async () => {
          //   return fetch(`http://localhost:5000/products`)
          // },
          element:<Shop></Shop>
        },
        {
          path: "orders",
          loader:CartAndProductLoader,
          element:<Order></Order>
        },
        {
          path: "Inventory",
          element:<PrivateRoutes><Inventory></Inventory></PrivateRoutes>
        },
        {
          path: "/shipping",
          element: <PrivateRoutes><Shipping></Shipping></PrivateRoutes>
        },
        {
          path: "about",
          element:<About></About>
        },
        {
          path: "login",
          element:<LogIn></LogIn>
        },
        {
          path: "singup",
          element:<SingUp></SingUp>
        }
      ]
    },
   
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
