import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./components/homePage/navBar";
import HomePage from "./components/homePage/homePage";
import AboutUs from "./components/aboutUs/aboutUs";
import OurServices from "./components/ourServices/ourServices";
import Footer from "./components/homePage/footer";
import Careers from "./components/careerPage/Career";
import Projects from "./components/projects/project";
import WebDevKnowMore from "./components/ourServices/webdevKnowMore";
import Insights from "./components/Insights/Insights";
import QuotePage from "./components/quote/QuotePage";
import Blog5 from "./components/Insights/blog5";
import ExplorePage from "./components/explore/explorepage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/product" element={<Projects />} />
        <Route path="/knowmore" element={<WebDevKnowMore />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/blog/5" element={<Blog5 />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
