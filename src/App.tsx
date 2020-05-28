import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'


import Login from './views/login/indx'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" component={Login} exact></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
