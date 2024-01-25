import { useState } from "react";

const ShortnedUrls = (props) => {
  const { shortenedUrl } = props;
  const [copy, setcopy] = useState("Copy");

  const handleCopy = (index) => {
    navigator.clipboard.writeText(shortenedUrl[index].shortLink);
    setcopy(index);
  };

  const reversedShortenedUrl = [...shortenedUrl].reverse();


  return (
    <>
      {reversedShortenedUrl &&
        reversedShortenedUrl.map((n, index) => (
          <div
            key={n.id}
            className='results mb-4 px-6 py-4 rounded-lg bg-white flex justify-between items-center'
          >
            <div className='large-link'>
              <b className='text-black '>{n.largeLink} </b>
            </div>
            <div className='short-link flex items-center gap-4'>
              <a href={n.shortLink}>{n.shortLink}</a>
              <button
                onClick={() => handleCopy(index)}
                className={`px-8 py-4 rounded-lg font-bold text-white ${
                  copy === index ? "copied" : null
                }`}
              >
                {copy === index ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default ShortnedUrls;
