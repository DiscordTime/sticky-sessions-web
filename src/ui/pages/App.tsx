import React from 'react';
import './App.css';
import Login, { IResultRequest } from './Login/Login'

class App extends React.Component {

  loginCallback(req: IResultRequest) {
    if (req.success) {
      console.log('could not login')
      return
    }
    console.log('login successful')
  }

  render() {
    return(
      <Login loginCallback={this.loginCallback.bind(this)} />
  )}
}

export default App;
