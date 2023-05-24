import logo from "../assets/SafariIn3Clicks.png";
import menu from "../assets/menu.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return(
        <div>
            <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-70 h-auto flex justify-between items-center z-10" id="nav-logo">
                <a href="/"><img src={logo} alt="Logo" className="lg:w-48 lg:h-auto lg:ml-72 lg:py-1 w-24 h-auto ml-4 py-2" /></a>
                <div className="lg:mr-72 text-white lg:text-sm hidden"><a href="#/"><FontAwesomeIcon icon={faHome} className='pr-1' />Home</a> <a href="#/" ><FontAwesomeIcon icon={faUser} className='pr-1 pl-4' />Login</a></div>
                <img src={menu} alt="Logo" className="block lg:hidden w-6 md:mr-24 mr-4" />
            </nav>
        </div>
    );
}

export default Navbar;