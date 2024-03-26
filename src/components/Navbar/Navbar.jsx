import { Link } from "react-router-dom";


const Navbar = () => {

    const navlink = <>
        <Link className="text-xl font-semibold font-sans text-white cursor-pointer ">Home</Link>
        <Link to="/about" className="text-xl font-semibold font-sans text-white cursor-pointer">About</Link>
        <Link to="/offers" className="text-xl font-semibold font-sans text-white cursor-pointer">Offers</Link>
        <Link to="/pricing" className="text-xl font-semibold font-sans text-white cursor-pointer">Pricing</Link>
        <Link to="/covarage" className="text-xl font-semibold font-sans text-white cursor-pointer">Covarge</Link>
        <Link className="text-xl font-semibold font-sans text-white cursor-pointer">Paybill</Link>
        <Link to='/contact' className="text-xl font-semibold font-sans text-white cursor-pointer">Contact</Link></>
    return (
        <div className="bg-gray-500 ">
            <div className="navbar max-w-7xl mx-auto  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-400 rounded-box w-52 gap-5">
        
       {navlink}
      </ul>
    </div>
    <img className="w-40" src="https://www.dotinternetbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-logo.b474c2be.png&w=256&q=75" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5">
   {navlink}
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <Link className="px-2 py-2 text-white rounded-md font-semibold  bg-[#2563EB]">Quick pay</Link>
    <Link to="/selfcare" className="px-2 py-2 text-white rounded-md font-semibold  bg-[#2563EB]">Selfcare</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;