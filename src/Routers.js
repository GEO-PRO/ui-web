import { Route, Routes } from "react-router-dom";
import HomeOne from "./components/HomeOne/index";
import HomeTwo from "./components/HomeTwo";
import HomeThree from "./components/HomeThree";
import HomeFour from "./components/HomeFour";
import HomeFive from "./components/HomeFive";
import HomeSix from "./components/HomeSix";
import About from "./components/About";
import Service from "./components/Service";
import TeamsPage from "./components/TeamsPage";
import TeamDetails from "./components/TeamDetails";
import ServiceDetails from "./components/ServiceDetails";
import PortfolioDetails from "./components/PortfolioDetails";
import Pricing from "./components/Pricing";
import ErrorPage from "./components/ErrorPage";
import Portfolio from "./components/Portfolio";
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";
import BlogsTwo from "./components/BlogsTwo";
import Contact from "./components/Contact";

function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<HomeOne />} />
      <Route exact path="/home-two" element={<HomeTwo />} />
      <Route exact path="/home-three" element={<HomeThree />} />
      <Route exact path="/home-four" element={<HomeFour />} />
      <Route exact path="/home-five" element={<HomeFive />} />
      <Route exact path="/home-six" element={<HomeSix />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/service" element={<Service />} />
      <Route exact path="/teams" element={<TeamsPage />} />
      <Route exact path="/team-details" element={<TeamDetails />} />
      <Route exact path="/service-details" element={<ServiceDetails />} />
      <Route exact path="/portfolio" element={<Portfolio />} />
      <Route exact path="/portfolio-details" element={<PortfolioDetails />} />
      <Route exact path="/pricing" element={<Pricing />} />
      <Route exact path="/error" element={<ErrorPage />} />
      <Route exact path="/blogs" element={<Blogs />} />
      <Route exact path="/blog-details" element={<BlogDetails />} />
      <Route exact path="/blogs-two" element={<BlogsTwo />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Routers;
