import React from 'react';
import Homepage from '../../views/homepage.component.jsx';
import { Switch, Route } from 'react-router-dom';

const Hats = () => (
  <div>
    <h1>HATS PAGE!!!!!</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}
export default App;
