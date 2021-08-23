// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}  from 'react-router-dom'
import Home from './home/home.jsx'
function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/home'>Home</Link>
        <hr/>
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
