import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Routes/Home';
import Search from './Routes/Search';
import Tv from './Routes/Tv';
import Header from './Components/header';

function App() {
  
  return (
    <Router>
        <Header/>
        <Switch>
            <Route exact path={["/","/movies/:movieId"]}>
              <Home/>
            </Route>
            <Route path="/tv">
              <Tv/>
            </Route>
            <Route path="/search">
              <Search/>
            </Route>
        </Switch>
    </Router>
  );

}

export default App;
