import { UserDataSource } from '../datasource/UserDataSource'
import { Nullable, UserRequest } from '../../ui/pages/Login/Login'
import { User } from '../entities/User'

export class UserRepository {

  userDS: UserDataSource

  constructor(userDataSource: UserDataSource) {
    this.userDS = userDataSource
  }

  addUser(user: Nullable<UserRequest>) {
    if (!user) {
      throw new Error('Could not add user')
    }

    console.log('[UserRepository], user:', user)
    this.userDS.addUser(user)
  }

  getUser(): User{
    return this.userDS.getUser()
  }

}
