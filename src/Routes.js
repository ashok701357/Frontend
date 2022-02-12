import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from "./Components/Account";
import AdminHomePage from "./Components/Admin Pages/AdminHomepage";
import AdminPolls from "./Components/Admin Pages/AdminPolls";
import FooterComponent from "./Components/HomepageComponents/FooterComponent";
import Header from "./Components/HomepageComponents/Header";
import HomePage from "./Components/HomepageComponents/HomePage";
import PollsHistory from "./Components/PollsHistory";
import { Switch } from "react-router-dom";
import LoginPage from "./Components/LoginPage";

const Routes = () => {
    return (
        <div>
            {/* <p>Routes Component</p> */}

            <div>
                <Router>
                    <div>
                        <Header />
                        <div>
                            <Switch>
                                <Route exact path="/login" > <LoginPage /> </Route>  
                                <Route exact path="/" > <HomePage /> </Route>   
                                <Route path="/adminDashboard" > <AdminHomePage /> </Route>
                                <Route path="/adminPollManagement" > <AdminPolls /> </Route>
                                <Route path="/Account" > <Account /> </Route>
                                <Route path="/pollsHistory" >< PollsHistory /></Route>
                                {/* <Route path="/*" >< Page404 /></Route> */}
                                {/* <Route path="/dept">< Dept /></Route> */}
                            </Switch>
                        </div>
                        <FooterComponent />
                    </div>
                </Router>
            </div>
        </div>
    );
}
export default Routes;