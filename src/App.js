import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/registration';
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import Navbar from './Componant/Navbar';
import Home  from './Pages/Home';
import Show from './Pages/Show';
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/show/:id"} component={Show} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
