export class CookiesDataSource {

  addCookie(key: string, value: string, expires: string) {
    const cookie = key + "=" + value + ";" + expires
    console.log('adding cookie:', cookie)
    document.cookie = cookie
  }

  getCookie(key: string): JSON {
    const cookie = document.cookie.match(new RegExp(key + '=([^;]+)'));
    const result = cookie != null ? JSON.parse(cookie[1]) : [];
    return result;
  }
}
