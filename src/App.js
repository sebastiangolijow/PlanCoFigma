import './App.css';
import { Route} from "react-router-dom";
import {Home} from './components/Home'
import {downNav} from './components/downNav'
import {MiniNav} from './components/mininav/MiniNav'



function App() {


  return (
    <div className="App">
    <Route path='/' component={MiniNav}/>
     <Route path='/' component={Home}/>
     <Route path='/' component={downNav}/>

    </div>
  );
}

export default App;
