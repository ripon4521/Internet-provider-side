import InstructionCard from "./InstructionCard/InstructionCard";
import gif1 from '../../../public/New folder/pay.gif'
import gift2 from '../../../public/New folder/coverage.gif'
import gif3 from '../../../public/New folder/selfcare.gif'
import gif4 from '../../../public/New folder/contact.gif'


const Instruction = () => {
    return (
       <div className="container mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 md:gap-10 md:pl-8 gap-5 pl-14 lg:pl-0">
           <InstructionCard image={gif1} title={"How to pay ?"}/>
           <InstructionCard image={gift2} title={"Coverge Area"} bg={"#DCFCE7"}/>
           <InstructionCard image={gif3} title={"Dots Sef Care"} bg={"#E0E7FF"}/>
           <InstructionCard image={gif4} title={"Get in touch"} bg={"#FEF9C3"}/>
        </div>
       </div>
    );
};

export default Instruction;