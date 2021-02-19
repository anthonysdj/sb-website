import ig from "images/ig.png";
import fb from "images/fb.png";
import tw from "images/tw.png";

const { default: Form } = require("./Form");

const ContactUs = () => {
    return (
        <div>
            <iframe
                className="w-full h-800"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.7020297801864!2d121.01241261466407!3d14.559024589828951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ce2e9e856aed%3A0xf3c1c6f967f2b991!2sMakati%20Medical%20Center!5e0!3m2!1sen!2sph!4v1613744426922!5m2!1sen!2sph"
                frameBorder="0"
            ></iframe>

            <div className="bg-grad sm:pb-52">
                <div className="text-center sm:text-left bg-white shadow-2xl rounded -mt-60 relative z-50 p-10 sm:flex flex-row max-w-4xl mx-auto">
                    <div className="flex-1">
                        <h3 className="text-7xl sm:text-5xl text-gray-700">
                            Feel free to
                            <br />
                            Contact us
                        </h3>
                        <p className="mt-12 sm:mt-5 text-2xl">
                            or fill our contact form online
                        </p>

                        <p className="mt-5">Salon Address:</p>
                        <p>Downtown, Federicton, NB, Canada</p>

                        <p className="mt-5">Contact:</p>
                        <p>+1 123-456-7890</p>

                        <p className="mt-5">Email:</p>
                        <p>info@shearbeauty.ca</p>

                        <p className="mt-5">Website:</p>
                        <p>http://www.shearbeauty.ca/</p>

                        <div className="flex flex-row justify-center sm:justify-start mt-6">
                            <img className="h-8 w-8 mr-3" src={fb} alt=""/>
                            <img className="h-8 w-8 mr-3" src={ig} alt=""/>
                            <img className="h-8 w-8 mr-3" src={tw} alt=""/>
                        </div>
                    </div>

                    <Form></Form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
