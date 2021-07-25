import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import NavBar from './components/layouts/navbar/NavBar'
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={LogIn} exact />
          <Route path='/register' component={Register} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
