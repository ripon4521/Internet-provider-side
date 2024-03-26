import CovarageArea from "../../components/CovarageArea/CovarageArea";
import HappyCleints from "../../components/HappyCleints/HappyCleints";
import Instruction from "../../components/Instruction/Instruction";
import Banner from "../../components/Navbar/Banner/Banner";
import PricingPlans from "../../components/PricingPlans/PricingPlans";
import Service from "../../components/Service/Service";


const Home = () => {
    return (
        <div className="bg-[#111827]">
            
            <Banner/>
            <Service/>
            <hr className="my-20"/>
            <Instruction/>
            <hr className="my-20"/>
            <PricingPlans/>
            <hr className="my-20"/>
            <CovarageArea/>
            <hr className="my-20"/>
            <HappyCleints/>
            <hr className="my-20"/>
            
            
        </div>
    );
};

export default Home;