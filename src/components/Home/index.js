import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import Logo from './logo'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const JL = ["Jonah Lindsley"]
    const nameArray = JL.slice("")
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', ' ']
    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
        <h1 className='half-width'>
        <AnimatedLetters letterClass={letterClass} 
        strArray={nameArray}
        idx={15}
        />
        </h1>
        <h1 className='full-width'>
        <AnimatedLetters letterClass={letterClass} 
        strArray={jobArray}
        idx={22}
        />
        </h1>
        <h2>Entry Level Fullstack Developer. 
            <br />
             Team Player. 
             <br />
              Ready To Get Stuff Done.</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        </>
    )
}


export default Home