import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faCircleUser, faFolderOpen } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/Jonahs-portfolio'>
           <h1 className='hide'>Jonah</h1>
           <div>
            <h1 className='pink hide' >Lindsley</h1></div>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/Jonahs-portfolio">
                <FontAwesomeIcon icon={faHome} color="#72baed"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faCircleUser} color="#72baed"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#72baed"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faFolderOpen} color="#72baed"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target="blank" 
                rel="noreferrer" 
                href='https://www.linkedin.com/in/jonah-lindsley-b66b60241/' 
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#72baed" />
                </a>
            </li>
            <li>
                <a 
                target="blank" 
                rel="noreferrer" 
                href='https://github.com/jonahlindsley' 
                >
                    <FontAwesomeIcon icon={faGithub} color="#72baed" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;