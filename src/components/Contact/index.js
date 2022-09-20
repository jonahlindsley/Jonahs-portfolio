import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
           setLetterClass('text-animate-hover')
       }, 3000)
   }, [])

   // Get the modal
let modal = document.getElementById("myModal");
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
    return (
        <>
          {/* <!-- The Modal --> */}
<div id="myModal" className="modal">

{/* <!-- Modal content --> */}
<div className="modal-content">
<div className="modal-header">
  <h2>Email sent successfully!</h2>
</div>
<div id='contact' className="modal-body">
  <p>I will get back to you shortly</p>
  <p>Thank you.</p>
</div>
<div className="modal-footer">
  <h3>-Jonah</h3>
</div>
</div>

</div>
        <div className='container contact-page'>
      
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                    idx={15} />
                </h1>
                <p>
                    Please reach out with any questions.
                </p>
                <div className='contact-form' >
                    <form id='contact-form'>
                        <ul className='ul'>
                        <input type="hidden" name="contact_number" />
                            <li className='half'>
                                <input type="text" name='user_name' placeholder='Name' required />
                            </li>
                            <li className='half2'>
                                <input type="email" name='user_email' placeholder='Email' required />
                            </li>
                            <li className='full'>
                                <textarea type="text" name='message' placeholder='Message' required>
                                    </textarea> 
                            </li>
                            {/* <li className='full2'>
                                <input type="text" name='subject' placeholder='Subject' required />
                            </li> */}
                            <li id='submit'>
                                <input type="submit" className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
                <ul className='links'>
                    <li>
                    <h2 className='email'><a href="mailto:jonahlindsley@yahoo.com"> jonahlindsley@yahoo.com</a></h2>
                    </li>
            <li>
                <h2>Linkedin</h2>
                <a 
                target="blank" 
                rel="noreferrer" 
                href='https://www.linkedin.com/in/jonah-lindsley-b66b60241/' 
                >
                    <FontAwesomeIcon icon={faLinkedin} color="white" />
                </a>
            </li>
            <li>
                <h2>Github</h2>
                <a 
                target="blank" 
                rel="noreferrer" 
                href='https://github.com/jonahlindsley' 
                >
                    <FontAwesomeIcon icon={faGithub} color="white" />
                </a>
            </li>
            <li>
                    <h2 className='email'><a target='blank' href="https://docs.google.com/document/d/1xAPH4eRIzyqjOfj-WEgIjCRt61U42xL12LAWnUdzV40/edit"> Resume</a></h2>
                    </li>
        </ul>
        </div>
        <Loader type='pacman' />
        
        </>
    )
}

export default Contact