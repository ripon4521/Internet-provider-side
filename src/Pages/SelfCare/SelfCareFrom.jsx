import { FaMailBulk } from "react-icons/fa";
import { FaFacebook, FaLocationArrow, FaPhone } from "react-icons/fa6";
import { RiArrowRightLine } from "react-icons/ri";

const SelfCareFrom = () => {
    return (
        <div className="bg-[#1D232A] py-20 "> 
        <div className="flex flex-col md:flex-row  max-w-7xl mx-auto  bg-[#6B7280] w-[800px]   shadow-2xl">
          <div className="bg-[#3498DB]">
              <p className="text-xl font-semibold text-white px-10 pt-5 font-sans">Welcome</p>
        
              <p className=" text-white px-10  font-sans">Log in to unlock a world of digital experiences.</p>
              <p className="text-xl font-semibold text-white px-10 pt-5 font-sans">Opportunity</p>
<div className="px-10 mt-5">
                  <p className="text-white flex items-center gap-2"> <FaLocationArrow/> Pay the due at anytime</p>
                  <p className="text-white flex items-center my-1 gap-2"><FaLocationArrow/> Get support 24/7</p>
                  <p className="text-white flex items-center my-1 gap-2"> <FaLocationArrow/> Check connection status</p>
                  <p className="text-white flex items-center my-1 gap-2"> <FaLocationArrow/> Get usage and insights</p>
                  <p className="text-white flex items-center my-1 gap-2"> <FaLocationArrow/> Manage users and devices</p>
                  </div>
<div className="flex my-5 px-10 gap-5">
<button className="flex items-center gap-2 px-2 py-2 bg-[#3498DB] border rounded-md text-white font-semibold my-2"><FaFacebook/> Facebook</button>
<button className="flex items-center gap-2 px-2 py-2 bg-[#3498DB]  border rounded-md text-white font-semibold my-2"><FaFacebook/>Group</button>
</div> 

          </div>


          <div>
              <h1 className="text-white text-xl my-5 pl-10">Send us a message</h1>


              <div className=" px-10 gap-10">
              <div className="flex flex-col">
              <label className="text-white" htmlFor="">Username/Customer ID</label>
              <input className="px-2 py-2 rounded-md border border-white" type="text" name="" id="" />
              </div>
              <div className="flex flex-col">
              <label className="text-white" htmlFor="">Password</label>
              <input className="px-2 py-2 rounded-md border border-white" type="text" name="" id="" />
              </div>
              </div>

             

              
         
             
              <button className="px-3 py-2 bg-[#3498DB] rounded-md text-white font-semibold my-2 ml-10">Login</button>
            
          


          </div>
</div>
</div>
    );
};

export default SelfCareFrom;