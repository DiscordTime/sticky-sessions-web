import { Logger } from '../../utils/Logger'
export class CookiesDataSource {

  static TAG = CookiesDataSource.name

  addCookie(key: string, value: string, expires: string) {
    const cookie = key + "=" + value + ";" + expires
    Logger.log(CookiesDataSource.TAG, 'add cookie: ' + cookie)
    document.cookie = cookie
  }

  getCookie(key: string): JSON {
    Logger.log(CookiesDataSource.TAG, 'get cookie, key: ' + key)
    const cookie = document.cookie.match(new RegExp(key + '=([^;]+)'));
    const result = cookie != null ? JSON.parse(cookie[1]) : [];
    return result;
  }
}
