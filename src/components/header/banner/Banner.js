import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import banner from "images/banner.jpg";

const Banner = () => {
    return (
        <AwesomeSlider className="h-800 lg:h-auto" bullets={false} cssModule={AwesomeSliderStyles}>
            <div
                className="banner text-center"
                style={{ background: `url(${banner})` }}
            >
                <h1 className="text-7xl lg:big-font uppercase text-light-red">Welcome</h1>
                <p className="mt-2 lg:mt-0 lg:text-3xl tracking-widest text-white uppercase font-semibold">
                    to shear beauty salon and spa experience
                </p>
                <a
                    href="#"
                    title="cta"
                    className="uppercase bg-light-red py-3 px-5 rounded-lg inline-block mt-6 lg:mt-10 text-lg font-semibold"
                >
                    Book Now
                </a>
            </div>
        </AwesomeSlider>
    );
};

export default Banner;
