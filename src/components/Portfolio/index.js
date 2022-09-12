import './index.scss'
import passGen from "../../assets/images/passScreenshot.jpeg"
import teamGen from "../../assets/images/deployed-team-profile.png"
import quiz from "../../assets/images/deployedQuiz.png"
import forcastApp from "../../assets/images/weatherApp.png"
// import Loader from 'react-loaders';


function Portfolio() {

    return (
        <>
            <div className='Container portfolio-page'>
                <div className='portfolio-zone'>
                    <div className='passGen'>
                        <p>This is a simple website that creates a strong random password, users can choose how long they want he password to be, is they want numbers, special characters, upper or lower case letters and the site will provide a new randowm password that meets the provided constraints. 
                        <br/>
                        <a target="_blank" className='link' href='https://jonahlindsley.github.io/randomPassword/'> Link to the random password generator </a>
                        </p>
                        <img className='images' src={passGen}/>
                    </div>
                    <div className='teamGen'>
                        <p>A command line application that allows users to input names, roles and other information and then the application will compile the provided information into a new website.
                            <br/>
                        <a target="_blank" className='link' href='https://github.com/jonahlindsley/profileGen'> team Link to the website generator </a>
                        </p>
                        <img className='images' src={teamGen}/>
                    </div>
                    <div className='quiz'>
                       <p> This is a simple quiz game I made using HTML, CSS, and javascript. It asks questions one after the other and keeps score of your correct answers but be careful, wrong answers will cause a time penalty. after the game you can save your initials and score to local storage.
                       <br/>
                       <a target="_blank" className='link' href='https://jonahlindsley.github.io/quiz-game/?%27link'> Link to the  quiz about coding </a>
                       </p>
                        <img className='images' src={quiz}/>
                    </div>
                    <div className='forcastApp'>
                    <p> This is a 7 day forcast website I made, it lets users input a a city then uses a third party API to retreive the forcast and displays it. the site also utilizes local storage to save previous searches even after closing or refreshing the page.
                    <br/>
                    <a target="_blank" className='link' href='https://jonahlindsley.github.io/weather/?%27link'> Link to the forcast website </a>
                    </p>
                        <img className='images' src={forcastApp}/>
                    </div>
                </div>
            </div>
            {/* <Loader type='pacman' /> */}
        </>
    )
}

export default Portfolio