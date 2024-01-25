import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ShortenLink from "./components/ShortenLink";
import Statictics from "./components/Statictics";
import BoostLink from "./components/BoostLink";
import Footer from "./components/Footer";
import ShortnedUrls from "./components/ShortnedUrls";
import { v4 as uuidv4 } from "uuid";

const getLocalStorage = () => {
  const shortenedUrl = localStorage.getItem("shortenedUrl");

  if (shortenedUrl) {
    return JSON.parse(shortenedUrl);
  } else {
    return [];
  }
};
function App() {
  const [menuClicked, setMenuClicked] = useState(false);

  const [longLink, setLongLink] = useState("");
  const [error, setError] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState(getLocalStorage());

  const handleChange = (e) => {
    setLongLink(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const urlRegex = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );

    if (!longLink) setError("Please add a link");
    else if (!urlRegex.test(longLink)) setError("Invalid Link");
    else {
      const shortLink = async () => {
        const res = await fetch(
          `https://tinyurl.com/api-create.php?url=${longLink}`
        );
        const data = await res.text();
        const newData = {
          id: uuidv4(),
          largeLink: longLink,
          shortLink: data,
        };
        setShortenedUrl((prevLinks) => [...prevLinks, newData]);
        setLongLink("");
        setError("");
        console.log(shortenedUrl);
      };
      shortLink();
    }
  };

  useEffect(() => {
    localStorage.setItem("shortenedUrl", JSON.stringify(shortenedUrl));
  }, [shortenedUrl]);

  return (
    <>
      <div className='container'>
        <Header menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
        <Hero />
      </div>
      <div className='wrapper'>
        <div className='wrapper-2'>
          <div className='shorten-link-wrapper  grid gap-8'>
            <ShortenLink
              link={longLink}
              error={error}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              shortenedUrl={shortenedUrl}
            />
          </div>

          <Statictics />
        </div>
      </div>
      <BoostLink />
      <Footer />
    </>
  );
}

export default App;
