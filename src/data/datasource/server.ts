import { DataSource } from './DataSource'
import { Note } from '../entities/Note'

export class Server implements DataSource {

  url: string

  constructor(url: string) {
    this.url = url
  }

  getNotesFromSession(sessionId: string): Note[] {
    console.log('url:', this.url)
    console.log('sessionId:', sessionId)
    let url = this.url + '/notes&type=all&sessionId=' + sessionId
    console.log('fetch in:', url)
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
    return []
  }
}
