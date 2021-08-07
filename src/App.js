import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Componets/Header/Header';
import { GlobalStyles } from './styles/GlobleStyles';
import Trips from './Componets/Trips/Trips';
import Home from './pages/Home';
import Footer from './Componets/Footer/Footer';


function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Header/>
      <Switch>
        <Route to="/" component={Home}/>
        <Route to="/trips" component={Trips}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
