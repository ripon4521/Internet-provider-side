import { FaMailBulk } from "react-icons/fa";
import { FaFacebook, FaLocationArrow, FaPhone } from "react-icons/fa6";


const ConatctFrom = () => {
    return (
  <div className="bg-[#1D232A] py-20 "> 
          <div className="flex flex-col md:flex-row  max-w-7xl mx-auto gap-5 bg-[#6B7280]   shadow-2xl">
            <div className="bg-[#3498DB]">
                <p className="text-xl font-semibold text-white px-10 pt-5 font-sans">Contact information</p>
                <p className=" text-white px-10  font-sans">If you would like to find out more about how we can help you, please give us a call or drop us an email.</p>
<div className="px-10 mt-5">
                    <p className="text-white flex items-center gap-2"> <FaPhone/> +8809639121121, +8809638121121, +8801612594969, +8801912594969</p>
                    <p className="text-white flex items-center my-1 gap-2"><FaMailBulk/> info@dotinternetbd.com</p>
                    <p className="text-white flex items-center my-1 gap-2"> <FaLocationArrow/>  350, Rayer Bazar East, (Jafrabad), Mohammadpur</p>
                    <p className="text-white flex items-center my-1 gap-2"> <FaMailBulk/> Billing enquiries
<br />
accounts@dotinternetbd.com</p>
<p className="text-white flex items-center my-1 gap-2"><FaMailBulk/>Technical enquiries <br /> noc@dotinternetbd.com</p>
<p className="text-white flex items-center my-1 gap-2"> <FaMailBulk/>New connection enquiries

sales@dotinternetbd.com</p>
<p className="text-white flex items-center my-1 gap-2"><FaMailBulk/>Management

admin@dotinternetbd.com</p></div>
<div className="flex my-5 px-10 gap-5">
<button className="flex items-center gap-2 px-2 py-2 bg-[#3498DB] border rounded-md text-white font-semibold my-2"><FaFacebook/> Facebook</button>
<button className="flex items-center gap-2 px-2 py-2 bg-[#3498DB]  border rounded-md text-white font-semibold my-2"><FaFacebook/>Group</button>
</div> 

            </div>


            <div>
                <h1 className="text-white text-xl my-5">Send us a message</h1>


                <div className="flex gap-10">
                <div className="flex flex-col">
                <label className="text-white" htmlFor="">First Name</label>
                <input className="px-2 py-2 rounded-md border border-white" type="text" name="" id="" />
                </div>
                <div className="flex flex-col">
                <label className="text-white" htmlFor="">First Name</label>
                <input className="px-2 py-2 rounded-md border border-white" type="text" name="" id="" />
                </div>
                </div>

                <div className="flex gap-10">
                <div className="flex flex-col">
                <label className="text-white" htmlFor="">Email</label>
                <input className="px-2 py-2 rounded-md border border-white" type="text" name="" id="" />
                </div>
                <div className="flex flex-col">
                <label className="text-white" htmlFor="">Phone</label>
                <input className="px-2 py-2 rounded-md border border-white" type="text" name="" id=""  />
                </div>
                </div>


                
           
                <div className="flex flex-col">
                <label className="text-white" htmlFor="">Subject</label>
                <input className="px-2 py-2 rounded-md border border-white" type="text" name="" id="" />
                </div>

                <div className="flex flex-col">
                <label className="text-white" htmlFor="">Message</label>
                <input className="px-2 py-5 rounded-md border border-white" type="text" name="" id="" />
                </div>
                <button className="w-full py-2 bg-[#3498DB] rounded-md text-white font-semibold my-2">Sumbit</button>
              
            


            </div>
  </div>
  </div>
    );
};

export default ConatctFrom;