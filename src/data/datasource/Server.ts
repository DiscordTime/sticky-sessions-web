import { NoteDataSource } from './NoteDataSource'
import { UserRepository } from '../repository/UserRepository'
import { Note } from '../entities/Note'
import { User } from '../entities/User'

export class Server implements NoteDataSource {

  url: string
  userRepo: UserRepository

  constructor(url: string, userRepo: UserRepository) {
    this.url = url
    this.userRepo = userRepo
  }

  // TODO: Needs a callback or to return a Promise-compatible
  getNotesFromSession(sessionId: string): Note[] {
    console.log('url:', this.url)
    console.log('sessionId:', sessionId)
    var idToken: string = ''
    try {
      const user: User = this.userRepo.getUser()
      console.log('the-user', user)
      idToken = user.idToken
    } catch (err) {
      return []
    }
    console.log('User idToken=' + idToken)
    let url = this.url + '/notes&type=all&sessionId=' + sessionId
    console.log('fetch in:', url)
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))

    return []
  }
}
