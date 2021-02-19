const Tile = ({ img, children }) => {
    return (
        <div
            className="bg-light-red tile p-8 flex flex-col justify-center"
            style={
                img && {
                    background: `url(${img})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }
            }
        >
            {!img && children}
        </div>
    );
};

export default Tile;
