import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage/'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { routes } from './const/routes';
function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
       <div className='main'>
      <Routes>
          {routes.map(({path, Component})=>
          <Route key={path} exact path ={path} element = {<Component/>}/>
          )}
         
      </Routes>
       </div >
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
