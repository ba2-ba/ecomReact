import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts";
import Banner from "./components/Banner";
import Subscribe from "./components/Subscribe";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";


function App() {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
return (
  <>
   <Navbar />
   <Hero/>
   <Products/>
   <TopProducts/>
   <Banner/>
   <Subscribe/>
   <Testimonial/>
   <Footer/>
   
   
   
</>
);
}
export default App;

