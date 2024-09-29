import { Link } from "react-router-dom";

const Footer = () => {
  if(window.location.pathname.includes('/product')){
    return null;
  }
  return (
    <footer className='bg-black p-20 grid lg:grid-cols-9 grid-cols-1 bottom-0 gap-8 w-full'>
      <div className=''>
        <p className="footerLink"><Link to="/about">About</Link></p>
        <p className="footerLink"><Link to="/contact">Contact Us</Link></p>
        <p className="footerLink"><Link to="/pricing">Pricing</Link></p>
        <p className="footerLink"><Link to="/support">Support</Link></p>
      </div>  
      <div className='text-white col-span-1 lg:col-span-6'>
        
      </div>
      <div className="mx-4 lg:col-span-2">
      <div className='text-white flex items-center gap-1'>
      <img src="/image.png" className="max-h-12 translate-y-2" alt="logo" />
        <h1 className="text-3xl tracking-wider font-bold">
        <Link to="/">Testimonials</Link>
        </h1>
      </div>
      <p className="translate-x-12 -translate-y-2 text-slate-300 text-sm">Copyright &copy; 2024 - All rights reserved </p>
      </div>
    </footer>
  )
}

export default Footer
