import { Link, NavLink } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-J.webp'
import {useState, useEffect} from 'react'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import Logo from './logo'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'n', 'a', 'h']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', ' ']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        })
    })

    return (
        <div className="container home-page">
            <div className="text-zone">
        <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
         <br /> 
         <span className={`${letterClass} _13`}>I'</span>
         <span className={`${letterClass} _14`}>m</span>
        <img src={LogoTitle} alt='developer name'/>
        <AnimatedLetters letterClass={letterClass} 
        strArray={nameArray}
        idx={15}
        />
        <br />
        <AnimatedLetters letterClass={letterClass} 
        strArray={jobArray}
        idx={22}
        />
        </h1>
        <h2>Entry Level Fullstack Developer / Team Player / Ready To Get Stuff Done</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>

    )
}


export default Home