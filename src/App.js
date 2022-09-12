import Layout from './components/Layout';
import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

function App() {
  return (
<>
<BrowserRouter>
<Layout/>
<Routes>
    <Route exact path='/react-portfolio' element={<Home />} />
    <Route exact path='/about' element={<About />} />
    <Route exact path='/contact' element={<Contact />} />
    <Route exact path='/portfolio' element={<Portfolio />} />
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
