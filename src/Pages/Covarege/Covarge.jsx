import AboutBanner from "../About/AboutBanner/AboutBanner";
import CovargeSerchArea from "./CovargeSerchArea";


const Covarge = () => {
    return (
        <div>
           <AboutBanner title={"Coverage area"} desc={"Dot Internet's coverage area is wide. Dot Internet is spread almost everywhere in Dhaka city. Check the availability of all coverage areas in Dhaka."}/>
           <CovargeSerchArea/>
        </div>
    );
};

export default Covarge;