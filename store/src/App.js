import './App.css';
import "./assets/sass/app.scss";
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
import ProductDetail from './pages/ProductDetail';
import ProductByCategoryList from './pages/ProductByCategoryList';

function App() {
  return (
    <div >
      <Router>
          <Header/>
        <Switch>
          <div>
          <Route path="/" exact component={MainPage} />
          <Route path ="/login" exact component={LoginPage}/>
          <Route path ="/products/category/:category" exact component={ProductByCategoryList}/>
          <Route path ="/products/:id" exact component={ProductDetail}/>
          <ProtectedRoute path ="/adminPanel/products" exact component={AdminPanelProductsPage}/>
          <ProtectedRoute path ="/adminPanel/available" exact component={AdminPanelAvailablePage}/>
          <ProtectedRoute path ="/adminPanel/orders" exact component={AdminPanelOrderPage}/>
          </div>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
