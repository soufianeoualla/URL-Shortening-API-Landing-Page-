import logo from "./assets/logo.svg";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className='footer-wrapper grid place-content-center items-start gap-16 p-16 sx:flex sx:flex-col sx:justify-center sx:items-center'>
        <div>
          <img src={logo} alt='' />
        </div>
        <div className='footer-links flex justify-between items-start sm:grid sx:text-center gap-8'>
          <div className='first-block  grid gap-4'>
            <strong className='text-white'>Features</strong>
            <ul className='grid gap-2'>
              <li>
                <a href=''>Link Shortening</a>{" "}
              </li>
              <li>
                <a href=''>Branded Links</a>{" "}
              </li>
              <li>
                <a href=''>Analytics</a>{" "}
              </li>
            </ul>
          </div>
          <div className='second-block  grid gap-4'>
            <strong className='text-white'>Resources</strong>
            <ul className='grid gap-2'>
              <li>
                <a href=''>Blog</a>{" "}
              </li>
              <li>
                <a href=''>Developers</a>{" "}
              </li>
              <li>
                <a href=''>Supprot</a>{" "}
              </li>
            </ul>
          </div>
          <div className='third-block grid gap-4'>
            <strong className='text-white'>Company</strong>
            <ul className='grid gap-2'>
              <li>
                <a href=''>About</a>{" "}
              </li>
              <li>
                <a href=''>Our Team</a>{" "}
              </li>
              <li>
                <a href=''>Careers</a>{" "}
              </li>
              <li>
                <a href=''>Contact</a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className='social-icons flex gap-4 items-center text-white text-3xl ml-8 sm:ml-0'>
          <a href=''>
            <AiFillFacebook />
          </a>
          <a href=''>
            <FaSquareXTwitter />
          </a>
          <a href=''>
            <FaPinterest />
          </a>
          <a href=''>
            <FaInstagramSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
