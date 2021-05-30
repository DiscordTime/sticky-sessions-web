import { CookiesDataSource } from './CookiesDataSource'
import { UserRequest, Nullable } from '../../ui/pages/Login/Login'
import { User } from '../entities/User'
import { Logger } from '../../utils/Logger'

export class UserDataSource {

  static TAG: string = 'UserDataSource'

  cookiesDS = new CookiesDataSource()

  addUser(user: Nullable<UserRequest>) {
    Logger.log(UserDataSource.TAG, 'add user: ' + JSON.stringify(user))
    if (!user) {
      Logger.log(UserDataSource.TAG, 'Could not add User')
      throw new Error()
    }

    const userJson = JSON.stringify(user)
    this.cookiesDS.addCookie('user', userJson, new Date().toString())
  }

  getUser(): User {
    const userCookie = this.cookiesDS.getCookie('user')
    if (!userCookie) {
      Logger.log(UserDataSource.TAG, 'Could get User')
      throw new Error()
    }

    const user = Object.assign(new User(), userCookie) 
    return user
  }
}
