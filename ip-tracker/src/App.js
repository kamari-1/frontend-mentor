import { useState, useEffect } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import ScrollToTop from "./components/ScrollToTop";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronRight, faChevronUp);

function App() {
  // --------------------------
  // ----- STATES -----
  // --------------------------
  const [loaded, setLoaded] = useState(false);
  const [ip, setIp] = useState("");
  const [ipData, setIpData] = useState({
    ip: "",
    location: { lat: 0, lng: 0 },
    isp: "",
  });

  // --------------------------
  // ----- USE-EFFECTS -----
  // --------------------------
  // Set ipData on initial render
  useEffect(() => {
    getIp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --------------------------
  useEffect(() => {
    setLoaded(true);
  }, [ipData]);

  // --------------------------
  // ----- FUNCTIONS -----
  // --------------------------
  // getIp
  async function getIp() {
    const response = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ip}`
    );
    const data = await response.json();
    setIpData(data);
  }

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    getIp();
  };

  // handleInput
  const handleInput = (e) => {
    e.preventDefault();
    setIp(e.target.value);
  };

  return (
    <div className="App">
      <Header
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        loaded={loaded}
        setIp={setIp}
        ipData={ipData}
      />
      <Map lat={ipData.location.lat} lng={ipData.location.lng} zoom={17} />
      <ScrollToTop />
    </div>
  );
}

export default App;
