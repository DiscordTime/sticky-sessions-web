import { UserDataSource } from '../datasource/UserDataSource'
import { Nullable, UserRequest } from '../../ui/pages/Login/Login'
import { User } from '../entities/User'
import { Logger } from '../../utils/Logger'

export class UserRepository {

  static TAG = UserRepository.name
  userDS: UserDataSource

  constructor(userDataSource: UserDataSource) {
    this.userDS = userDataSource
  }

  addUser(user: Nullable<UserRequest>) {
    if (!user) {
      throw new Error('Could not add user')
    }

    Logger.log(UserRepository.TAG, 'user: ' + JSON.stringify(user))
    this.userDS.addUser(user)
  }

  getUser(): User{
    return this.userDS.getUser()
  }

}
