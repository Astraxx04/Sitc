import logo from "../assets/SafariIn3Clicks.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return(
        <div>
            <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-70 h-auto flex justify-between items-center z-10" id="nav-logo">
                <a href="/"><img src={logo} alt="Logo" className="w-48 h-auto ml-72 py-1" /></a>
                <div className="mr-72 text-white text-sm"><a href="#/"><FontAwesomeIcon icon={faHome} className='pr-1' />Home</a> <a href="#/" ><FontAwesomeIcon icon={faUser} className='pr-1 pl-4' />Login</a></div>
            </nav>
        </div>
    );
}

export default Navbar;