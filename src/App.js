import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/registration';
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import Navbar from './Componant/Navbar';
import Home  from './Pages/Home';
import Show from './Pages/Show';
import FavPage from './Pages/FavPage'
import Footer from './Componant/Footer';
function App() {
  return (
    <div className="bg-dark">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/show/:id"} component={Show} />
          <Route exact path={"/FavPage/"} component={FavPage} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
