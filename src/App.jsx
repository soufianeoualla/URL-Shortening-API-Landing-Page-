import { useEffect, useState } from "react";
import { useFormik } from "formik";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ShortenLink from "./components/ShortenLink";
import Statictics from "./components/Statictics";
import BoostLink from "./components/BoostLink";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);

  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;


    if (!input) setError("Please add a link");
    else if (!urlRegex.test(input)) setError("Invalid Link");
  };

  return (
    <>
      <div className='container'>
        <Header menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
        <Hero />
      </div>
      <div className='wrapper'>
        <div className='wrapper-2'>
          <ShortenLink
            link={input}
            error={error}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
          <Statictics />
        </div>
      </div>
      <BoostLink />
      <Footer />
    </>
  );
}

export default App;
