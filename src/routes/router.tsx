import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Coin from './coin';
import Coins from './Coins';
import HomeBtn from './btnComponents/HomeBtn';
import MenuBtn from './btnComponents/MenuBtn';

interface IRouterProps {
    toggleDark: ()=>void
}

function Router({toggleDark}:IRouterProps){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/:coinId/">
                    <Coin/>
                </Route>
                <Route exact path="/">
                    <Coins toggleDark={toggleDark}/>
                </Route>
            </Switch>
            
            <HomeBtn />
            <MenuBtn />
        </BrowserRouter>
    );
}
export default Router;