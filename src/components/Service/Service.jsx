import ServiceCard from "./ServiceCard/ServiceCard";
import { FaHome } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaGripLines } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";








const Service = () => {
    return (
        <div className="container mx-auto p-2">
            <h1 className="text-5xl font-bold mt-10 text-white drop-shadow-md">Services & Solutions</h1>
            <p className="text-xl font-semibold text-gray-400 my-2">Join today to take advantage of Dot Internets great features.</p>

            <div className="grid grid-cols-1 pl-16 md:grid-cols-2 md:pl-10 lg:pl-0 lg:grid-cols-4 justify-center items-center gap-20  my-20">
                <ServiceCard desc={" Dot Internet is providing one of the fastest broadband internet and network solutions throughout Dhaka, reliable for both gamers and regular users."} title={"Home Broadband Internet"} icon={<FaHome className="text-6xl text-[#2563EB] "/>} />
                <ServiceCard desc={"Dot Internet provides VPN, Antivirus, CCTV IP surveillance solutions ensuring top of the line security to your end."} title={"Network Security"} icon={<HiOutlineComputerDesktop className="text-6xl text-[#2563EB] "/>}/>
                <ServiceCard desc={"Offering dedicated internet connection with various network solutions ensuring network stability for our Corporate and SME consumers. Along with a support manager for 24/7 response."} title={"Corporate/SME Internet"} icon={<IoBagHandleOutline className="text-6xl text-[#2563EB] "/>}/>
                <ServiceCard desc={"Get a dedicated server hosted on your end to complete your daily needs with efficient network routing and configuration."} title={"Dedicated Server Hosting"} icon={<FaGripLines className="text-6xl text-[#2563EB] "/>} />
                <ServiceCard desc={"Dot Internet provides both LAN & WAN networks solutions. With the help of our experienced network engineers, we ensure the most efficient Network solutions for our clients."} title={"Network Solutions"} icon={<LuUpload className="text-6xl text-[#2563EB] "/>}/>
                <ServiceCard desc={"Dot Internet provides high end CCTV and IP surveillance solutions to residential, commercial, and industrial customers in Bangladesh."} title={"CCTV System Solutions"} icon={<IoSettingsOutline className="text-6xl text-[#2563EB] "/>}/>
                <ServiceCard desc={"Dot Internet offers various solutions for Data connectivity. Keeping our system updated with the latest technologies, we ensure the most efficient data connectivity solutions for our clients."} title={"Data Connectivity"} icon={<FaDatabase className="text-6xl text-[#2563EB] "/>}/>
                <ServiceCard desc={"Dedicated high-speed internet connectivity with multiple upstream support and multiple backup links to ensure 99.9% uptime."} title={"Dedicated Internet"} icon={<TbWorld className="text-6xl text-[#2563EB] "/>} />
            </div>
        </div>
    );
};

export default Service;