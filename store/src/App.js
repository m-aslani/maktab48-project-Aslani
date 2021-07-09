import './App.css';
import Header from "./component/Header";
import LoginPage from "./pages/LoginPage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from './pages/MainPage';
import AdminPanel from './pages/AdminPanel';
import { ProtectedRoute } from "./ProtectedRoute";
import { isLoggedIn } from "./utils/auth";
import AdminPanelProductsPage from './pages/AdminPanelProductsPage';
import AdminPanelAvailablePage from './pages/AdminPanelAvailablePage';
import AdminPanelOrderPage from './pages/AdminPanelOrderPage';

function App() {
  return (
    <div >
      <Router>
          <Header/>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path ="/login" exact component={LoginPage}/>
          {/* <ProtectedRoute path ="/admin_panel/:title" exact component={AdminPanel}/> */}
          <ProtectedRoute path ="/adminPanel/products" exact component={AdminPanelProductsPage}/>
          <ProtectedRoute path ="/adminPanel/available" exact component={AdminPanelAvailablePage}/>
          <ProtectedRoute path ="/adminPanel/orders" exact component={AdminPanelOrderPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
