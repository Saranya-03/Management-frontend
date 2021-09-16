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

            <Route exact path="/management/products">
              <Products/>
            </Route>  

            <Route path="/management/products/addProduct">
              <AddProducts/>
            </Route>  
            
            <Route path="/management/orders">
              <Orders/>
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
