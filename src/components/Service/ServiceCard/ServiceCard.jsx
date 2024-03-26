import "./Styles.css";


const ServiceCard = ({title, icon,desc }) => {
    // console.log(service.title)
  return (
    <div>
      <div className="card w-[280px] h-[300px] bg-[#111827] ">
        <p>
          {icon}
        </p>
        <div className="icon text-xl font-semibold text-white mt-5">{title}
       
        </div>

        <p className="description text-white">
         {desc}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
