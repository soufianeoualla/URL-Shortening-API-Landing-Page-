import LoginSignUp from "./LoginSignUp";
import MobileMenu from "./MobileMenu";
import Navlinks from "./Navlinks";
import logo from "./assets/logo.svg";
import { IoMenu } from "react-icons/io5";

const Header = (props) => {
  const { menuClicked, setMenuClicked } = props;
  return (
    <header className='flex justify-between items-center '>
      <div className='flex justify-between items-center gap-12'>
        <img src={logo} alt='' />
        <nav className='sm:hidden'>
          <Navlinks />
        </nav>
      </div>
      <div className='buttons sm:hidden'>
        <LoginSignUp />
      </div>
      <button
        onClick={() => setMenuClicked(!menuClicked)}
        className='menu hidden sm:block'
      >
        <IoMenu
          className='
      text-4xl '
        />
      </button>
      {menuClicked && <MobileMenu />}
    </header>
  );
};

export default Header;
