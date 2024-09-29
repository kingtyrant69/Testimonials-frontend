import Button from "./Button.jsx";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import axios from '../api/axios.js'


const withoutNavbar = ["/login", "/signup","/product"];

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const [checked, setChecked] = useState(false);
  const isLargeScreen = window.innerWidth >=1024;
  const pathname = window.location.pathname;
  const {auth, setAuth} = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    const handleButton = ()=>{
      if(auth?.accessToken){
        setIsLoggedIn(true)
      }
    } 
    handleButton()
  })


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("bg-black bg-opacity-40");
      } else {
        setNavbarBg("bg-transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  if (withoutNavbar.some((item) => pathname.includes(item))) {
    return (
      <nav className='sticky top-0 py-6'>
        <div className="lg:col-span-3 col-span-9 flex items-center gap-1 font-bold lg:mx-8 mx-4">
          <img src="/image.png" className="max-h-10" alt="logo" />
          <h1 className="text-2xl tracking-wide">
            <Link to="/">Testimonials</Link>
          </h1>
        </div>
      </nav>
    )
  }
  
  
  const handleLogout = async() =>{
    try {
      await axios.post('/v1/users/logout', {
        withCredentials: true
      })
      setAuth({});
      navigate('/login')
      navigate(0)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className={`sticky top-0 z-50 ${isLargeScreen?navbarBg:'bg-black bg-opacity-40'} `}>
      <div className='grid lg:grid-cols-5 grid-cols-10 items-center py-4'>
        <div className="lg:col-span-3 col-span-9 flex items-center gap-1 font-bold lg:mx-8 mx-4">
          <img src="/image.png" className="max-h-10" alt="logo" />
          <h1 className="text-2xl tracking-wide">
            <Link to="/">Testimonials</Link>
          </h1>
        </div>
        <div className={`hidden lg:flex pl-1`}>
          <ul className="flex decoration-none items-center gap-16 text-base/8 font-medium">
            <li className="relative group">
              <Link to="/about" className="hover-line relative">
                About
              </Link>
            </li>
            <li className="relative group">
              <Link className="hover-line relative" to="/support">
                Support
              </Link>
            </li>
            <li className="relative group">
              <Link className="hover-line relative" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="relative group">
              <Link className="hover-line relative" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              {!isLoggedIn ? (
                <Link to='/login'><Button label="Login" secondary={true} /></Link>
              ) : (
                <Button label="Logout" secondary={true} onClick={handleLogout}/>
              )}
            </li>
          </ul>
        </div>
        <div className='lg:hidden'>
          <label className="burger" htmlFor="burger">
            <input type="checkbox" id="burger" onChange={()=>setChecked(!checked)}/>
            <span></span>
            <span></span>
            <span></span>
          </label>  
        </div>
        <div className={`${checked?'':'hidden'} py-2 lg:hidden col-span-5 mx-10`}>
        <ul className={` flex-col decoration-none items-center font-medium tracking-wide`}>
            <li className="relative text-xl p-4">
              <Link to="/about">
                About
              </Link>
            </li>
            <li className="relative text-xl p-4">
              <Link to="/support">
                Support
              </Link>
            </li>
            <li className="relative text-xl p-4">
              <Link to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="relative text-xl p-4">
              <Link to="/contact">
                Contact
              </Link>
            </li>
            <li className="p-4">
            {!isLoggedIn ? (
                <Link to='/login'><Button label="Login" secondary={true} /></Link>
              ) : (
                <Button label="Logout" secondary={true} onClick={handleLogout}/>
              )}
            </li>
          </ul>
          </div>
      </div>
    </nav>
  );
};


export default Navbar;
