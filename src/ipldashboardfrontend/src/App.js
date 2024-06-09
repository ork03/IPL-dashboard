import './App.css';
import {Route, HashRouter as Router, Routes} from 'react-router-dom';
import { Teampage } from './pages/Teampage';
import { MatchPage } from './pages/MatchPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/teams/:teamName/Matches/:year' element ={ <MatchPage />}/>
          <Route path='/teams/:teamName' element ={ <Teampage />}/>
          <Route path='/' element={<HomePage />}/>
        </Routes>
        
      </Router>
     
    </div>
  );
}

export default App;
