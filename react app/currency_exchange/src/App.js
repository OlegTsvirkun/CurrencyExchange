import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage/'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element = {<HomePage/>}/>
        {/* <Route exact path='/' element = {<HomePage/>}/> */}
      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
