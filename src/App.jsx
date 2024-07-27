import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Contact } from "./components/contact";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const teamData = [
  { name: "Toba Toluwase", job: "Fashion Designer", img: "img/team/01.jpg" },
];

const contactData = [
  {
    address: "Abuja FCT Nigeria ",
    phone: "+234 8157050147",
    email: "tobatolu14@gmail.com",
    instagram: "lase__clothing",
    twitter: "@toluwase_",
  },
];

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={teamData} />
      <Contact data={contactData} />
      <Footer />
    </div>
  );
};

export default App;
