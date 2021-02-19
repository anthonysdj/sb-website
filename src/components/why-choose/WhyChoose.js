import tuboi from "images/tuboi.png";
import dahon from "images/dahon.png";
import fishcake from "images/fishcake.png";

const WhyChoose = () => {
    return (
        <div className="max-w-6xl mx-auto pb-36 px-5">
            <div className="sm:w-1/2 ml-auto pt-20">
                <h2 className="text-4xl sm:text-5xl uppercase text-gray-800 text-center sm:text-left">Why Choose</h2>
                <h3 className="text-2xl sm:text-3xl uppercase text-gray-800 font-normal my-3 text-center sm:text-left">shear Beauty salon and spa</h3>
                <p className="text-center sm:text-left sm:text-lg mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                </p>

                <ul className="max-w-sm mx-auto sm:ml-auto">
                    <li className="flex flex-row items-center mb-5">
                        <img src={dahon} alt="" />
                        <div>
                            <h4 className="text-3xl">100% Natural</h4>
                            <p className="text-3xl">Products</p>
                        </div>
                    </li>
                    <li className="flex flex-row items-center mb-5">
                        <img src={tuboi} alt="" />
                        <div>
                            <h4 className="text-3xl">Professional</h4>
                            <p className="text-3xl">Beauticians</p>
                        </div>
                    </li>
                    <li className="flex flex-row items-center">
                        <img src={fishcake} alt="" />
                        <div>
                            <h4 className="text-3xl">Special Offers</h4>
                            <p className="text-3xl">For You</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WhyChoose;
