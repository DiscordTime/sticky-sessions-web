import React from 'react';

import { Container } from '@material-ui/core';
import GoogleLoginButton from '../../components/GoogleLoginButton/GoogleLoginButton'
import { UserRepository } from '../../../data/repository/UserRepository'
import { UserDataSource } from '../../../data/datasource/UserDataSource'
import { NoteDataSource } from '../../../data/datasource/NoteDataSource'
import { Server } from '../../../data/datasource/Server'

//Assets
import logo from '../../../assets/logo.svg'
//Css
import './Login.css';

export type Nullable<T> = T | undefined | null

export interface UserRequest {
  name: string,
  email: string,
  idToken: string,
}

export interface IResultRequest {
  success: boolean
}

interface LoginProps {
  loginCallback: (req: IResultRequest) => void
}

class Login extends React.Component<LoginProps, {}> {

  // TODO: for testing
  userDS = new UserDataSource()
  userRepo = new UserRepository(this.userDS)
  dataSource: NoteDataSource = new Server('http://127.0.0.1:3000', this.userRepo)

  signInCallback(result: Nullable<UserRequest>) {
    if (!result) {
      this.props.loginCallback({ success: false })
    }

    console.log('loginCallback:', JSON.stringify(result))
    try {
      this.userRepo.addUser(result)
    } catch(err) {
      return
    }

    this.dataSource.getNotesFromSession('arandomid')
  }

  render() {
    return(
      <div className="loginRoot">
      <Container className="box" maxWidth="sm">
        <img className="logoImg" src={logo} alt="Logo" />
        <div className="textAppName">
          Sticky Sessions
        </div>
        <GoogleLoginButton signInCallback={this.signInCallback.bind(this)} />
        <span className="textVersion">
          v 00.00.02
        </span>
      </Container>
      </div>
    );
  }
}

export default Login
