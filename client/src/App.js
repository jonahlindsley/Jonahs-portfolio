import logo from './logo.svg';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState('me but')
  return (
    <div>
      <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">{title}</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
  <p>this is the section were i will discribe myself with them gooood wordz</p>
  <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Contact me</h5>
       
              </div>

            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2022 Copyright Jonah Lindsley
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    </div>
  );
}

export default App;
