import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import NavBar from './components/layouts/navbar/NavBar'
import Footer from './components/layouts/footer/footer'
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';
import SingleFood from './pages/SingleFood/SingleFood';


import AdminDashbord from './components/dashbord/Admin/dashbord/AdminDashbord';
import UserDashbord from './components/dashbord/User/dashbord/UserDashbord';
import UserOrders from './components/dashbord/User/Orders/UserOrders';
import Review from './components/dashbord/User/Review/Review'
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';

//Route
import ProtectedRoute from './components/route/ProtectedRoute'
import OrderList from './components/dashbord/Admin/orderList/OrderList';
import NewFood from './components/dashbord/Admin/NewFood/NewFood';
import About from './pages/About/About';
import Food from './components/HomePage/Food/Food';
import Team from './pages/Team/Team';
import Reservation from './pages/Reservation/Reservation';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/menu' component={Food} />
          <Route path='/team' component={Team} />
          <Route path='/reservation' component={Reservation} />
          <Route path='/login' component={LogIn} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/single-food/:id' component={SingleFood} exact />
          <Route path='/cart' component={Cart} />

          <ProtectedRoute path='/user/dashbord' component={UserDashbord} />
          <ProtectedRoute path='/user/orders' component={UserOrders} />
          <ProtectedRoute path='/user/payment' component={Payment} />
          <ProtectedRoute path='/user/review' component={Review} />

          {/* admin routers */}
          <ProtectedRoute path='/admin/dashbord' component={AdminDashbord} isAdmin={true} />
          <ProtectedRoute path='/admin/order-list' component={OrderList} isAdmin={true} />
          <ProtectedRoute path='/admin/new-food' component={NewFood} isAdmin={true} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
