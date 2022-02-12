import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import HomePage from './Components/HomepageComponents/HomePage';
import LoginPage from './Components/LoginPage';
import PollsHistory from './Components/PollsHistory';
import UsersListHome from './Components/Admin Pages/UserListHome';
import AdminHomePage from './Components/Admin Pages/AdminHomepage';
import AdminPolls from './Components/Admin Pages/AdminPolls';
import Routes from './Routes';
import PollComponent from './Components/PollComponent';

function App() {
  return (
    // <div>
    //   <Routes />
    // </div>
    // <UsersListHome />
    // <LoginPage />
    // <HomePage />
    //<AdminHomePage />
    // <PollsHistory />
    // <AdminPolls />
    <PollComponent />
  );
}

export default App;
