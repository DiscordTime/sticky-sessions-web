import React from 'react';
import './App.css';
import Login, { IResultRequest } from './Login/Login'
import { Logger } from '../../utils/Logger'

class App extends React.Component {

  static TAG = App.name

  loginCallback(req: IResultRequest) {
    if (req.success) {
      Logger.log(App.TAG, 'Could not login')
      return
    }
    Logger.log(App.TAG, 'Login successful')
  }

  render() {
    return(
      <Login loginCallback={this.loginCallback.bind(this)} />
  )}
}

export default App;
