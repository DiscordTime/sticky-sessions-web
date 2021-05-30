import { NoteDataSource } from './NoteDataSource'
import { UserRepository } from '../repository/UserRepository'
import { Note } from '../entities/Note'
import { User } from '../entities/User'
import { Logger } from '../../utils/Logger'

export class Server implements NoteDataSource {

  static TAG = Server.name
  url: string
  userRepo: UserRepository

  constructor(url: string, userRepo: UserRepository) {
    this.url = url
    this.userRepo = userRepo
  }

  // TODO: Needs a callback or to return a Promise-compatible
  async getNotesFromSession(sessionId: string): Promise<Note[]> {
    Logger.log(Server.TAG, 'sessionId: ' + sessionId)
    var idToken: string = ''
    try {
      const user: User = this.userRepo.getUser()
      idToken = user.idToken
    } catch (err) {
        throw err
    }
    Logger.log(Server.TAG, 'token: ' + idToken)
    let url = this.url + '/notes&type=all&sessionId=' + sessionId
    Logger.log(Server.TAG, 'url: ' + url)
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Token': idToken
        }
      })
      return await res.json()
    } catch(err) {
      return []
    }
  }
}
