import { CookiesDataSource } from './CookiesDataSource'
import { UserRequest, Nullable } from '../../ui/pages/Login/Login'
import { User } from '../entities/User'

export class UserDataSource {

  static TAG: string = 'UserDataSource'

  cookiesDS = new CookiesDataSource()

  addUser(user: Nullable<UserRequest>) {
    console.log('UserDS:', JSON.stringify(user))
    if (!user) {
      console.log('[' + UserDataSource.TAG + '] could not add user')
      throw new Error()
    }

    const userJson = JSON.stringify(user)
    this.cookiesDS.addCookie('user', userJson, new Date().toString())
  }

  getUser(): User {
    const userCookie = this.cookiesDS.getCookie('user')
    if (!userCookie) {
      console.log('[' + UserDataSource.TAG + '] could not get user')
      throw new Error()
    }


    const user = Object.assign(new User(), userCookie) 
    console.log('[' + UserDataSource + '] user:', user)
    return user
  }
}
