import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './containers/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import ProductComponent from './containers/ProductComponent';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={ProductListing}/>
        <Route path="/product/:productId" exact component={ProductDetail}/>
        {/* <Route path="/" exact component={ProductComponent}/> */}
        <Route>404 Not Found</Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
