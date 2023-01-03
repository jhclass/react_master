import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Coin from './coin';
import Coins from './Coins';
import HomeBtn from './btnComponents/HomeBtn';
import MenuBtn from './btnComponents/MenuBtn';



function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/:coinId/">
                    <Coin/>
                </Route>
                <Route exact path="/">
                    <Coins/>
                </Route>
            </Switch>
            
            <HomeBtn />
            <MenuBtn />
        </BrowserRouter>
    );
}
export default Router;