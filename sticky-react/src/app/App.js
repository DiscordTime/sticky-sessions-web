import React, { Component } from 'react';
import { BrowserRouter }  from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Login from './pages/login/Login';
import * as ROUTES from './constants/routes';


class App extends Component {
  render() {
      return (
            <BrowserRouter>
              <Switch>
                  <Route exact path={ROUTES.SIGN_IN} component={Login} />
              </Switch>
            </BrowserRouter>
      );
  }
}

export default App;
