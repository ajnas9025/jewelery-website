import './App.css';
import Log from './Front_Page/Login';
import Register from './Front_Page/Register';
import User from './getuser/user';
import Adduser from './adduser/Adduser';
import Update from "./updateproduct/Update";
import Home from "./Front_Page/Home";
import Admin from "./Front_Page/Admin";
import Product from './products/product';
import Shop from './products/Shops';
import Contact from './products/Contact';
import Cart from './products/Cart';
import Rating from './products/Rating';
import Add_prooducts from './products/Add_prooducts';
import View_products from './products/View_products';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Whyus from './products/Whyus';
const router = createBrowserRouter([// Creates a router object to define app routes.

    {
      path: "/",
      element: <Log />,
      },
    {
      path: "/Register",
      element: <Register />,
      },
      {
        path:"/Home" ,
        element:<Home />
      },
      {
        path:"/admin" ,
        element:<Admin />
      },
 {
 path: "/user",
 element: <User />,
 },
 {
  path: "/products",
  element: <Product />,
  },
  {
    path: "/add_products",
    element: <Add_prooducts />,
    },
    {
      path: "/all_products",
      element: <View_products />,
      },
 {
    path:"/add",
    element:<Adduser />
  },  
  {
    path:"/update/:id",
    element:<Update />
  },
  {
    path:"/Shop",
    element:<Shop />
  },
  {
    path:"/Whyus",
    element:<Whyus />
  },
  {
    path:"/Contact",
    element:<Contact />
  },
  {
    path:"/Cart",
    element:<Cart />
  },
  {
    path:"/Rating",
    element:<Rating />
  }
  
]);
function App() {
  return (
  <div className="App">
  <header className="App-header">
  <RouterProvider router={router} /> 
  </header>
  </div>
  );
  }
  export default App;
  