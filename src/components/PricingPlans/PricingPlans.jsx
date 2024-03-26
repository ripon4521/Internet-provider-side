import PriceCard from "./PriceCard/PriceCard";


const PricingPlans = () => {
    return (
        <div className="container mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-center">
           <div >
                <div><h1 className="text-5xl font-sans font-bold text-white">Pricing Plans</h1>
            <p className="text-xl text-gray-400 my-2">Choose a package that suits your budget & business.</p></div>
            </div>
            <div className="flex gap-5">
                <button className="px-2 py- bg-[#4F46E5] text-white font-semibold rounded-md">BTRC Aproved Trarrif</button>
                <button className="px-2 py-2 bg-[#4F46E5] text-white font-semibold rounded-md">All Pakge</button>
            </div>
           </div>
           <PriceCard/>
           <div className="flex justify-center my-5">
           <button className="py-2 px-3 bg-[#2563EB] text-white font-semibold  text-center rounded-md">View Other Pakge</button>
           </div>
        </div>
    );
};

export default PricingPlans;