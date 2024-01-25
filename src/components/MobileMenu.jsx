import LoginSignUp from "./LoginSignUp"
import Navlinks from "./Navlinks"

const MobileMenu = () => {
  return (
    <div className=" hidden mobile-menu sm:grid items-center text-center rounded-lg fixed w-10/12 px-6 py-10 z-10 ">
        <nav className="grid gap-10 ">
            <Navlinks />
            <LoginSignUp/>
        </nav>
    </div>
  )
}

export default MobileMenu