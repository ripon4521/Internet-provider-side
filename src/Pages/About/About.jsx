import AboutBanner from "./AboutBanner/AboutBanner";
import AboutInfo from "./AboutInfo/AboutInfo";
import Partner from "./Partner&member/Partner";


const About = () => {
    return (
        <div>
            <AboutBanner title={"About Dot Internet"} desc={"DOT Internet has started its operation in the year 2005 with the commitment of quality internet service at an affordable price. At the time of commencement DOT Internet started with broadband service with the state of art technology."}/>
            <AboutInfo/>
            <Partner/>
        </div>
    );
};

export default About;