import { useState } from 'react';
import Home from './components/home';
import About from './components/about';
import { Switch, Route, useHistory } from 'react-router-dom';
import SideBar from './components/sidebar';
import './App.css';

function App() {
  const [active, setActive] = useState();
  const history = useHistory();

  return (
    <div className="App ">
      <SideBar active={active} />
      <Switch>
        <Route path="/home" render={() => <Home setActive={setActive} history={history} />} />
        <Route path="/about" render={() => <About setActive={setActive} />} />
      </Switch>
    </div>
  );
}

export default App;
