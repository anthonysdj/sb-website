import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import quote from "images/quote.png";
import woman from "images/woman.png";
import bg from "images/tesimonial_bg.jpg";

const Testimonial = () => {
    return (
        <div>
            <AwesomeSlider className="h-800" bullets={false} cssModule={AwesomeSliderStyles}>
                <div
                    className="max-w-4xl text-center px-5"
                    style={{
                        background: `url(${bg})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                >
                    <img className="w-56 mx-auto mb-5" src={woman} alt="" />
                    <h4 className="text-2xl uppercase text-light-red">
                        Lorem Ipsum
                    </h4>
                    <h5 className="text-base text-white font-normal">
                        Celebrity Actress
                    </h5>

                    <p className="mt-4 text-white sm:text-3xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>

                    <img className="w-20 sm:w-30 mx-auto mt-10" src={quote} alt="" />
                </div>
            </AwesomeSlider>
        </div>
    );
};

export default Testimonial;
