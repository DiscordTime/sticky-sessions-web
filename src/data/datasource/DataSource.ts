import { Note } from '../entities/Note'
export interface DataSource {
  getNotesFromSession(sessionId: string): Note[]
}

