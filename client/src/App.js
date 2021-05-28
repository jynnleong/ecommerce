import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Checkout from "./Components/Checkout/Checkout";
import HomeScreen from "./Components/HomeScreen/HomeScreen";

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomeScreen}></Route>
          <Route path="/cart/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
