import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Products from './Component/Products';


function App() {
    return ( 
        <Router>
        <Navbar/>
        <Switch>
        
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        </Switch>
        
        </Router>
    )
}

export default App;