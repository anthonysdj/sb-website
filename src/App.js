import Tiles from "components/tiles";
import WhyChoose from "components/why-choose";
import Header from "./components/header";
import babae from "images/babae.jpg";
import Specialist from "components/specialist";
import Testimonial from "components/testimonials";
import ContactUs from "components/contact-us/ContactUs";

function App() {
    return (
        <div className="">
            <Header />
            <Tiles />
            <div className="bg-right sm:bg-bottom lg:mt-32 sm:bg-size-250 md:bg-size-150 lg:bg-cover" style={{background: `url(${babae})`, backgroundRepeat: "no-repeat"}}>
                <WhyChoose />
            </div>
            <Specialist />
            <Testimonial />
            <ContactUs />
        </div>
    );
}

export default App;
