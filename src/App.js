// import { useState } from 'react';
import Home from './components/home';
import About from './components/about';
import { Switch, Route, useHistory } from 'react-router-dom';
import SideBar from './components/sidebar';
import './App.css';

function App() {
  // const [active, setActive] = useState();
  const history = useHistory();

  return (
    <div className="flex space-x-10 my-5 px-5">
      <SideBar history={history} />
      <Switch>
        <Route path="/home" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
      </Switch>
    </div>
  );
}

export default App;
