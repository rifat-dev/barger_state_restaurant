import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import NavBar from './components/layouts/navbar/NavBar'
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';
import SingleFood from './pages/SingleFood/SingleFood';


import ProtectedRoute from './components/route/ProtectedRoute'
import AdminDashbord from './components/dashbord/Admin/dashbord/AdminDashbord';
import UserDashbord from './components/dashbord/User/dashbord/UserDashbord';
import UserOrders from './components/dashbord/User/Orders/UserOrders';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={LogIn} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/single-food/:id' component={SingleFood} exact />
          <Route path='/cart' component={Cart} />

          <ProtectedRoute path='/user/dashbord' component={UserDashbord} />
          <ProtectedRoute path='/user/orders' component={UserOrders} />
          <ProtectedRoute path='/user/payment' component={Payment} />

          {/* admin routers */}
          <ProtectedRoute path='/admin/dashbord' component={AdminDashbord} isAdmin={true} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
