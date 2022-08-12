import './App.css';
import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import BaseRouter from './router/BaseRouter';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/home" component={BaseRouter} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
