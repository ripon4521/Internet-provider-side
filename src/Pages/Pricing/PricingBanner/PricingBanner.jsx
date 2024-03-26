import PriceCard from "../../../components/PricingPlans/PriceCard/PriceCard";


const PricingBanner = () => {
    return (
        <div>
            <div className="hero min-h-80" style={{backgroundImage: 'url(https://www.dotinternetbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.9e69a762.jpg&w=1200&q=75)'}}>
  <div className="hero-overlay "></div>
  <div className="hero-content">
    <div className=" lg:-ml-72">
      <h1 className="mb-5 text-5xl text-white font-bold">Our Pricing Plans</h1>
      <p className="mb-5 text-white">Dot Internets pricing plans are flexible. Dot Internet offers competitive rates and pricing plans to help you find one that fits your needs and budget.</p>
    
    </div>
  </div>
</div>
<div className=" bg-[#1D232A]">
<div className="max-w-7xl mx-auto py-10">
<PriceCard/>
</div>

</div>
        </div>
    );
};

export default PricingBanner;