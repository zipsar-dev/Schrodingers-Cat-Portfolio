import Navbar from "../Components/Common/Navbar";
import GalleryCard from "../Components/Card/GalleryCard";
import Footer from "../Components/Common/Footer";
import About from "../Components/Sections/Home/About";
import Model from "../Components/Sections/Home/Model";
import Reach from "../Components/Sections/Home/Reach";
import Feedback from "../Components/Sections/Home/Feedback";
const Home = () => {
  return (
    <div>
      <Navbar activeClass={"Home"} />
      <GalleryCard />
      <div className="w-[80%] mx-auto my-10">
        <About />
        <Model />
        <Reach />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
