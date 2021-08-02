import './App.css';
import "./assets/sass/app.scss";
import Header from "./component/Header";
import LoginPage from "./pages/LoginPage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from './pages/MainPage';
import { ProtectedRoute } from "./ProtectedRoute";
import AdminPanelProductsPage from './pages/AdminPanelProductsPage';
import AdminPanelAvailablePage from './pages/AdminPanelAvailablePage';
import AdminPanelOrderPage from './pages/AdminPanelOrderPage';
import ProductDetail from './pages/ProductDetail';
import ProductByCategoryList from './pages/ProductByCategoryList';
import FinalPurchesePage from './pages/FinalPurchesePage';
import PaymentPage from './pages/PaymentPage';
import SuccessfullPaymentPage from './pages/SuccessfullPaymentPage';
import CancelPaymentPage from './pages/CancelPaymentPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import Divider from '@material-ui/core/Divider';
import Footer from './component/Footer';

function App() {
  return (
    <div >
      <Router>
          <Header/>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path ="/login" exact component={LoginPage}/>
          <Route path ="/search" exact component={SearchPage}/>
          <Route path ="/products/category/:category" exact component={ProductByCategoryList}/>
          <Route path ="/products/:id" exact component={ProductDetail}/>
          <Route path ="/finalize_Purchese" exact component={FinalPurchesePage}/>
          <Route path ="/fake.shaparak" exact component={PaymentPage}/>
          <Route path ="/successfullMassage" exact component={SuccessfullPaymentPage}/>
          <Route path ="/cancelMassage" exact component={CancelPaymentPage}/>
          <ProtectedRoute path ="/adminPanel/products" exact component={AdminPanelProductsPage}/>
          <ProtectedRoute path ="/adminPanel/available" exact component={AdminPanelAvailablePage}/>
          <ProtectedRoute path ="/adminPanel/orders" exact component={AdminPanelOrderPage}/>
          <Route path="*" exact component={NotFoundPage}/>
          </Switch>
          <Divider />
          {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
