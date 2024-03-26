
const InstructionCard = ({image, title,bg}) => {
    return (
        <div >
           <div style={{backgroundColor:`${bg}`}} className='bg-orange-200 w-80 h-84 rounded-md'>
           <img className='rounded-md' src={image} alt="" />
            <h1  className=' text-2xl py-1  text-center'>{title}</h1>
           </div>
        </div>
    );
};

export default InstructionCard;