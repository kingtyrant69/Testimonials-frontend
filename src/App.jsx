import {
  BrowserRouter as Router,
  Routes,
  Route
  } from "react-router-dom";  
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx';
import Home from './pages/home.jsx';
import Dashboard from "./pages/dashboard/dashboard.jsx";
import Product from "./pages/Product.jsx";
import ProductDetails from "./pages/dashboard/products/ProductDetails.jsx";
import Layout from "./components/Layout.jsx";
import About from "./pages/about.jsx";
import Support from "./pages/support.jsx";
import Pricing from "./pages/pricing.jsx";
import Contact from "./pages/Contact.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import PersistentLogin from "./components/PersistentLogin.jsx";

function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route element={<PersistentLogin/>}>
                <Route path='/' index element={<Home />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup />} />
                <Route element={<ProtectedRoute/>}>
                  <Route path="/dashboard" element={<Dashboard/>}/>
                  <Route path='/products/:spaceId' element={<ProductDetails/>}/>
                </Route>  
                <Route path="/product" element={<Product/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/support" element={<Support/>}/>
                <Route path="/pricing" element={<Pricing/>}/>
                <Route path="/contact" element={<Contact/>}/>
              </Route>
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
    </>
  )
}

export default App
