import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./app.css";
import Topbar from "./components/Topbar/Topbar";

import ManagementSidebar from "./components/managementSidebar/Sidebar";
import ManagementHome from "./pages/management/Home/managementHome";
import Orders from "./pages/management/Orders/orders";
import Products from "./pages/management/Products/products";
import AddProducts from "./pages/management/Products/addProduct";
import Reports from "./pages/management/Reports/reports";
import Routes from "./pages/management/Route/route";
import SalesPerson from "./pages/management/SalesPerson/salesPerson";
import AddSalesPerson from "./pages/management/SalesPerson/NewSalesPerson";
import Shops from "./pages/management/Shops/shops";
import ViewProducts from './pages/management/Products/viewProducts';
import AddOrders from "./pages/management/Orders/addOrder";
import ViewSalesPerson from './pages/management/SalesPerson/viewSalesPerson';
import ViewOrders from './pages/management/Orders/viewOrder';


function App() {
  return (
    <Router>
    <div className="App"> 
      <Topbar />
      <div className="container">
        <ManagementSidebar />
        
          <Switch>
            <Route exact path="/management">
              <ManagementHome/>
            </Route>  

            <Route exact path="/management/salesperson">
              <SalesPerson/>
            </Route>

            <Route path="/management/salesperson/addSalesPerson">
              <AddSalesPerson/>
            </Route>

            <Route exact path="/management/salesPerson/:id">
              <ViewSalesPerson/>
            </Route>

            <Route exact path="/management/products">
              <Products/>
            </Route>

            <Route exact path="/management/products/addProduct">
              <AddProducts/>
            </Route> 

            <Route exact path="/management/products/:productName">
              <ViewProducts/>
            </Route>  
            
            <Route exact path="/management/orders">
              <Orders/>
            </Route>  

            <Route path="/management/orders/addOrders">
              <AddOrders/>
            </Route>  

            <Route path="/management/Order/:id">
              <ViewOrders/>
            </Route>  
            
            <Route path="/management/shops">
              <Shops/>
            </Route> 
            
            <Route path="/management/routes">
              <Routes/>
            </Route>  
            
            <Route path="/management/reports">
              <Reports/>
            </Route> 
             
          </Switch>   
      </div>
      
    </div>
    </Router> 
  );
}

export default App;
