import logo from './logo.svg';
import './App.css';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component authed={authed} {...props} {...rest} />)
    : (<Redirect to={{ pathname: `/profile`, state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
