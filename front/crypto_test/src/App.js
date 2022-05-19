import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import Login from './Components/Login';
import Feed from './Components/Feed';
function App() {
  return (
    <div className="App">
      
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/feed' element={<Feed/>}/>
    </Routes>
    </div>
  );
}

export default App;
