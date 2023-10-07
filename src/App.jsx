import "./scss/App.scss";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import Home from "./pages/Home";
import Changelogs from "./pages/Changelogs";
import Feedback from "./pages/Feedback";
import ExploreNaviMumbai from "./pages/ExploreNaviMumbai";
import MumbaiLocalRailMap from "./pages/MumbaiLocalRailMap";
import NaviMumbaiMetroMap from "./pages/NaviMumbaiMetroMap";
import MediaCoverage from "./pages/MediaCoverage";
import AdvertiseWithUs from "./pages/AdvertiseWithUs";
import NaviXploreAppFeatures from "./pages/NaviXploreAppFeatures";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar/NavbarComponent";
import Footer from "./components/Footer/FooterComponent";
import PostPage from "./components/[PostPage]";

import FamousPlacesJSON from "./json/FamousPlaces.json";
import TouristDestinationsJSON from "./json/TouristDestinations.json";

function App() {
  const [FamousPlaces, setFamousPlaces] = useState([]);
  const [TouristDestinations, setTouristDestinations] = useState([]);

  useEffect(() => {
    setFamousPlaces(FamousPlacesJSON);
  }, []);

  useEffect(() => {
    setTouristDestinations(TouristDestinationsJSON);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/changelogs" element={<Changelogs />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/explore-navi-mumbai" element={<ExploreNaviMumbai />} />
        <Route path="/navi-mumbai-metro-map" element={<NaviMumbaiMetroMap />} />
        <Route path="/mumbai-local-railmap" element={<MumbaiLocalRailMap />} />
        <Route
          path="/navixplore-app-features"
          element={<NaviXploreAppFeatures />}
        />
        <Route path="/media-coverage" element={<MediaCoverage />} />
        <Route path="/advertise-with-us" element={<AdvertiseWithUs />} />
        {FamousPlaces.map((item) => (
          <Route
            key={item.id}
            path={`/places/${item.name}`}
            element={<PostPage data={item} />}
          />
        ))}
        {TouristDestinations.map((item) => (
          <Route
            key={item.id}
            path={`/places/${item.name}`}
            element={<PostPage data={item} />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
