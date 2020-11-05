import React from 'react';
import './App.css';
import {
  BrowserRouter as
    // Router,
    Route,
  Redirect,
  // Switch
} from 'react-router-dom';

import Registration from '../Components/Registration/Registration'

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component authed={authed} {...props} {...rest} />)
    : (<Redirect to={{ pathname: `/profile`, state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false
  }

  render() {
    return (
      <div className="App">
        <Registration />
      </div>
    )
  }
}

export default App;
