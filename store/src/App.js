import './App.css';
import Header from "./component/Header";
import LoginPage from "./pages/LoginPage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from './pages/MainPage';

function App() {
  return (
    <div >
      <Router>
          <Header/>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path ="/login" exact component={LoginPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
