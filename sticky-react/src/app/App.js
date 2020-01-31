import React, { Component } from 'react';
import { BrowserRouter }  from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import * as ROUTES from './constants/routes';

//Material-UI
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

//Typeface
import 'typeface-roboto';
import NewMeeting from "./pages/newMeeting/NewMeeting";
import Meetings from "./pages/meetings/Meetings";

const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#42023e'
    },
    secondary:{
      main:'#ff534b'
    },
    white:{
        main:'#ffffff'
    }

  }
})

class App extends Component {
  render() {
      return (
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <Switch>
                    <Route exact path={ROUTES.SIGN_IN} component={Login} />
                    <Route  path={ROUTES.HOME} component={Home}/>
                    <Route path={ROUTES.NEW_MEETING} render={ () => <NewMeeting/>}/>
                </Switch>
              </BrowserRouter>
            </ThemeProvider>
      );
  }
}

export default App;
