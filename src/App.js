import './App.css';
import Hompage from './Components/Hompage';
import Login from './Components/Login';
import Register from './Components/Register';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  const [loginuser,setloginuser]=useState({})
  return (
    <div className="App center">
      <Router>
        <Switch>
        <Route exact path="/">
          {
            loginuser && loginuser._id?<Hompage val={loginuser}/>:<Login setloginuser={setloginuser}/>
          }
          </Route>
          <Route exact path="/login"><Login setloginuser={setloginuser}/></Route>
          <Route exact path="/register"><Register/></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
