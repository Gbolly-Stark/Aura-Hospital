
import HomeHero from "../components/HomeHero"
import Navbar from "../components/Navbar"
import HomeServices from "../components/HomeServices"
import HomeWhy from "../components/HomeWhy"
import HomeTestimonial from "../components/HomeTestimonial"
import HomeFAQ from "../components/HomeFAQ"
import HomeContact from "../components/HomeContact"
import Footer from "../components/Footer"

export default function Home() {
  
  return (
    <main>
      <Navbar/>
      <HomeHero/>
      <HomeServices/>
      <HomeWhy/>
      <HomeTestimonial/>
      <HomeFAQ/>
      <HomeContact/>
      <Footer/>


    </main>
    
  );
}
