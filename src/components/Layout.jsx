import {useState, useEffect, useRef} from 'react'
import Navbar from './Navbar.jsx'
import PropTypes from 'prop-types';
import Footer from './Footer.jsx'
import {Theme} from '@radix-ui/themes'
import useAuth from '../hooks/useAuth';
import LoadingBar from 'react-top-loading-bar'
import { useLocation } from 'react-router-dom';


const Layout = ({children}) => {
  const [theme, setTheme] = useState('dark');
  const {auth} = useAuth()
  const location = useLocation();
  const loadingBarRef = useRef(null)
  const [progress, setProgress] = useState(0);



  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname.includes('dashboard') || pathname.includes('products')) {
      setTheme('dark');
    }
  }, []);


  useEffect(() => {
    const root = document.documentElement;
    if (theme=='light') {
      root.style.setProperty('--hover-color', 'black');
      root.style.setProperty('--hamburger-color', 'black');
    } else if(theme=='dark'){
      root.style.setProperty('--hover-color', 'white');
      root.style.setProperty('--hamburger-color', 'white');
    }
  },[theme]);

  useEffect(() => {
    setProgress(30);  
    const timer = setTimeout(() => {
      setProgress(100); 
    }, 500); 
    return () => {
      clearTimeout(timer);
    };
  }, [location]);


  return (
    <Theme appearance={theme} > 
    <div>
        <LoadingBar progress={progress} color='#228B22' onLoaderFinished={() => setProgress(0)}/>
         <Navbar/>
        <div className="flex flex-col min-h-screen">
            <div>
                {children}
            </div>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
    </Theme>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}   

export default Layout
