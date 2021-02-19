import sp1 from "images/special_1.jpg";
import sp2 from "images/special_2.jpg";
import sp3 from "images/special_3.jpg";

const Specialist = () => {
    return (
        <div className="max-w-6xl mx-auto mt-20 sm:mt-40 mb-32 px-5">
            <h2 className="text-4xl sm:text-5xl text-center uppercase text-gray-800">
                Our Wonderful Specialists
            </h2>
            <h3 className="text-3xl sm:text-3xl text-center uppercase text-gray-800 font-normal my-3">
                Will take care of you
            </h3>

            <div className="sm:flex flex-row mt-12 text-center">
                <div className="px-2 mb-10">
                    <img className="w-full" src={sp1} alt="" />
                    <h4 className="mt-5 text-3xl font-normal">Lorem Ipsum</h4>
                    <p className="text-xl">Amazing Hairdresser</p>
                </div>
                <div className="px-2 mb-10">
                    <img className="w-full" src={sp2} alt="" />
                    <h4 className="mt-5 text-3xl font-normal">Lorem Ipsum</h4>
                    <p className="text-xl">Genius Make-up Artist</p>
                </div>
                <div className="px-2 mb-10">
                    <img className="w-full" src={sp3} alt="" />
                    <h4 className="mt-5 text-3xl font-normal">Lorem Ipsum</h4>
                    <p className="text-xl">Master Nail Artist</p>
                </div>
            </div>

            <p className="mt-8 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
            </p>
            <p className="text-center">
                <a
                    href="#"
                    title="cta"
                    className="mx-auto uppercase bg-light-red py-3 px-5 rounded-lg inline-block mt-10 text-lg font-semibold"
                >
                    Learn More
                </a>
            </p>
        </div>
    );
};

export default Specialist;
