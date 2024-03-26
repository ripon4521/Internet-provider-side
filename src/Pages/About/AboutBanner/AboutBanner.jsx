

const AboutBanner = ({title, desc}) => {
    return (
        <div className="">
            <div className="hero min-h-80" style={{backgroundImage: 'url(https://www.dotinternetbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.9e69a762.jpg&w=1200&q=75)'}}>
  <div className="hero-overlay "></div>
  <div className="hero-content">
    <div className=" ">
      <h1 className="mb-5 text-5xl text-white font-bold">{title}</h1>
      <p className="mb-5 text-white">{desc}</p>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutBanner;