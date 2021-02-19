import Tile from "./Tile";
import "./tiles.css";
import facials from "images/facials.jpg";
import makeup from "images/makeup.jpg";
import nails from "images/nails.jpg";
import hair_style from "images/hair_style.jpg";

const Tiles = () => {
    return (
        <div className="max-w-7xl mx-auto relative">
            <div className="-mt-20 lg:-mt-32">
                <div className="flex flex-row flex-wrap justify-center relative z-50">
                    <div className="sm:flex">
                        <Tile>
                            <span className="bg-gray-800 inline-block w-16 h-1"></span>
                            <h3 className="font-semibold text-3xl">Facials</h3>
                            <p className="text-xl">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do
                            </p>
                        </Tile>
                        <Tile img={facials}></Tile>
                    </div>
                    <div className="sm:flex flex-row-reverse lg:flex-row">
                        <Tile>
                            <span className="bg-gray-800 inline-block w-16 h-1"></span>
                            <h3 className="font-semibold text-3xl">Makeup</h3>
                            <p className="text-xl">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do
                            </p>
                        </Tile>
                        <Tile img={makeup}></Tile>
                    </div>
                </div>

                <div className="flex flex-row flex-wrap justify-center relative z-50">
                    <div className="sm:flex flex-row-reverse lg:flex-row">
                        <Tile img={nails}></Tile>
                        <Tile>
                            <span className="bg-gray-800 inline-block w-16 h-1"></span>
                            <h3 className="font-semibold text-3xl">Nails</h3>
                            <p className="text-xl">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do
                            </p>
                        </Tile>
                    </div>
                    <div className="sm:flex">
                        <Tile img={hair_style}></Tile>
                        <Tile>
                            <span className="bg-gray-800 inline-block w-16 h-1"></span>
                            <h3 className="font-semibold text-3xl">
                                Hair Styling
                            </h3>
                            <p className="text-xl">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do
                            </p>
                        </Tile>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tiles;
