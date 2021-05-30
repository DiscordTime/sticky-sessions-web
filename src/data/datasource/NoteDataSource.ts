import { Note } from '../entities/Note'
export interface NoteDataSource {
  getNotesFromSession(sessionId: string): Note[]
}

