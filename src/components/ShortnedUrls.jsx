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
            className='results mb-4 px-6 py-4 rounded-lg bg-white flex justify-between items-center sm:grid  sm:p-0'
          >
            <div className='large-link sm:pb-4 sm:p-4'>
              <b className='text-black sm:w-3/4 sm:text-xs '>{n.largeLink} </b>
            </div>
            <div className='short-link flex items-center gap-4 sm:grid sm:p-4 '>
              <a className="sm:text-xs" href={n.shortLink}>{n.shortLink}</a>
              <button
                onClick={() => handleCopy(index)}
                className={`px-8 py-4 rounded-lg font-bold text-white sm:text-xs   ${
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
