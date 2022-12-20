import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Coin from './coin';
import Coins from './Coins';

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/coin">
                    <Coin/>
                </Route>
                <Route path="/coins">
                    <Coins/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Router;