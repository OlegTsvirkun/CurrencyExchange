import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage/'
import { Header } from './components/Header/Header';
import { paths } from './paths';
function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element = {<HomePage/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
