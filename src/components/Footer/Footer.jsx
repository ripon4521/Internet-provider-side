import { FaFacebook } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="bg-[#1D232A] ">
          <div className="max-w-7xl mx-auto ">
            <footer className="footer p-10  text-base-content">
  <nav>
    <h6 className=" font-semibold text-xl   text-white">Company</h6> 
    <a className="link link-hover text-white">About Us</a>
    <a className="link link-hover text-white">Pricing</a>
    <a className="link link-hover text-white">Coverage area</a>
    <a className="link link-hover text-white">Bill Payment</a>
  </nav> 
  <nav>
    <h6 className="font-semibold text-xl    text-white">SUPPORT</h6> 
    <a className="link link-hover text-white">How to Pay</a>
    <a className="link link-hover text-white">Self-care</a>
    <a className="link link-hover text-white">Articles</a>
    <a className="link link-hover text-white">Contact us
</a>
  </nav> 
  <nav>
    <h6 className="font-semibold text-xl   text-white">QUICK LINKS</h6> 
    <a className="link link-hover text-white">Join Group</a>
    <a className="link link-hover text-white">Like our Page</a>
  
  </nav>
  <nav>
    <h6 className="font-semibold text-xl  text-white">Legal</h6> 
    <a className="link link-hover text-white">Terms & Conditions</a>
    <a className="link link-hover text-white">Privacy policy</a>
    <a className="link link-hover text-white">Return & Refund</a>
    <a className="link link-hover text-white">BTRC Approved Tarrif</a>
  </nav>
  <nav>
    <h6 className="font-semibold text-x  text-white">Subscribe to our chanels</h6> 
    <a className="link link-hover text-white">The latest news, articles, and resources, sent to your inbox weekly.</a>
    <div className="flex gap-5" >
    <input type="text" placeholder="Enter Your Email.." className="input input-bordered w-full max-w-xs" />
    <button className="px-2 py-2 text-white bg-[#2563EB] font-semibold rounded-md">Subscribe</button>
    </div>
  </nav>
</footer> 
<footer className="footer px-10 py-4  text-base-content border-base-300">
  <img src="https://www.dotinternetbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsslcommerz-foo.140b8410.png&w=3840&q=75" alt="" />

</footer>
<div className="flex container mx-auto bg-slate-600  justify-between items-center p-2 rounded-md ">
  <p className="text-white">  &copy;Dot Internet 2022. All rights reserved. Developed by Optimus Technologies.</p>
        <FaFacebook className="text-2xl text-white"/>
  </div>
        </div>
        </div>
    );
};

export default Footer;