import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import J from '../../assets/images/J.png'
import O from '../../assets/images/O.png'
import N from '../../assets/images/N.png'
import A from '../../assets/images/A.png'
import H from '../../assets/images/H.png'
import LogoSubtitle from '../../assets/images/jonah.logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faCircleUser, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className='jonah-logo' src={J} alt='logo' />
            <img className='jonah-logo' src={O} alt='logo' />
            <img className='jonah-logo' src={N} alt='logo' />
            <img className='jonah-logo' src={A} alt='logo' />
            <img className='jonah-logo' src={H} alt='logo' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faCircleUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/poftfolio">
                <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target="blank" 
                rel="noreferrer" 
                href='https://www.linkedin.com/in/jonah-lindsley-b66b60241/' 
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                target="blank" 
                rel="noreferrer" 
                href='https://github.com/jonahlindsley?tab=repositories' 
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;