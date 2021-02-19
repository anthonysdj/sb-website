import Nav from "./navigation/Nav";
import "./header.css";
import Banner from "./banner";

const Header = () => {
    return (
        <header>
            <Nav></Nav>
            <Banner />
        </header>
    );
}
 
export default Header;