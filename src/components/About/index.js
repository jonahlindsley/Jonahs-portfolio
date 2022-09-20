import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNodeJs, faHtml5, faCss3, faJsSquare, faAmazon } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import Main_animation from '../Main-animation'
import { Link, NavLink } from 'react-router-dom'

// for (let i = 1; i < 41; i++) {
    
//     var animationStartTime2 = .3 * i
//     let selectedDiv = document.getElementById(`animation-${[i]}`)
//     selectedDiv.style.animationDelay = `${animationStartTime2}${'s'}`
//     selectedDiv.style.animationTimingFunction = 'ease-in-out'
// }

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page bodyEL'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15} />
                </h1>
                <p>Not long ago I made a decision, a decision to leave my old job and field of work and pursue a new one, now I am a graduate of the full-stack coding bootcamp at the UMN, and I've finished several projects on my own that you can view in the portfolio section. I'm so excited for the new adventures and challenges that lay ahead on this path.</p>
                <p>A few things about me, I'm an avid outdoorsman, an eagle scout, a hard worker, and I have a passion for building. whether it's a website, a house or a relationship, I believe we are only as good as the things we create. but If I had to describe myself in one word it would be driven. I am driven to succeed, I am driven to protect the people I care about, most of all I am driven to be better than I was yesterday. </p>
                <p>Please feel free to <Link to='/contact' id="link">contact me</Link> for more information or to discuss employment opportunities.</p>
                
            </div>
     
           <Main_animation />
    <div className='stage-cube-cont' >
                <div className='cubespinner'>
                    {/* <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faNodeJs} color='#DD0031' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EC4' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faAmazon} color='#5ED4F4' />
                    </div> */}
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About