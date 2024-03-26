import AboutBanner from "../About/AboutBanner/AboutBanner";
import ConatctFrom from "./ConatctFrom";


const Contact = () => {
    return (
        <div>
           <AboutBanner title={"Get in touch"} desc={"If you would like to find out more about how we can help you, please give us a call or drop us an email. We welcome your comments and suggestions about this website and/or any other issues that you wish to raise."}/>
           <ConatctFrom/>
        </div>
    );
};

export default Contact;