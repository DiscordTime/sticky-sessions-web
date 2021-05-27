import React from 'react';
import './App.css';
import { Server } from '../../data/datasource/server'
import { DataSource } from '../../data/datasource/DataSource'
import Login, { IResultObj } from './Login/Login'

class App extends React.Component {

  // TODO: do not do 'new Server()' here
  dataSource: DataSource = new Server('http://127.0.0.1:3000')
  
  loginCallback(result: IResultObj) {
    console.log('App, result:', result)
    this.dataSource.getNotesFromSession('mySessionId')
  }

  render() {
    return(
      <Login loginCallback={this.loginCallback.bind(this)}/>
  )}
}

export default App;
