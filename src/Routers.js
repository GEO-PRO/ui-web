import { Route, Routes } from "react-router-dom";
import HomeOne from "./components/HomeOne/index";
import About from "./components/About";
import Service from "./components/Service"; // => Library
import TeamsPage from "./components/TeamsPage";
import TeamDetails from "./components/TeamDetails";
import ServiceDetails from "./components/ServiceDetails";
import PortfolioDetails from "./components/PortfolioDetails";
import Pricing from "./components/Pricing";
import ErrorPage from "./components/ErrorPage";
import Portfolio from "./components/Portfolio"; // => Filter docs with title
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";
import BlogsTwo from "./components/BlogsTwo"; // => News
import Contact from "./components/Contact";
import Library from "./components/Library"; // => Library title
import Exams from "./components/Exams"; // => Library title
import LoginPage from "./components/LoginPage/LoginPage";

function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<HomeOne />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/library" element={<Service />} />
      <Route exact path="/teams" element={<TeamsPage />} />
      <Route exact path="/team-details" element={<TeamDetails />} />
      <Route exact path="/service-details" element={<ServiceDetails />} />
      <Route exact path="/docs-title" element={<Portfolio />} />
      <Route exact path="/portfolio-details" element={<PortfolioDetails />} />
      <Route exact path="/pricing" element={<Pricing />} />
      <Route exact path="/error" element={<ErrorPage />} />
      <Route exact path="/blogs" element={<Blogs />} />
      <Route exact path="/news-details/:id" element={<BlogDetails />} />
      <Route exact path="/news" element={<BlogsTwo />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/library/title/:id" element={<Library />} />
      <Route exact path="library/exams" element={<Exams />} />
      <Route exact path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default Routers;
