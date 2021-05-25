export class Note {
  id: string
  sessionId: string
  topic: string
  description: string
  user: string

  constructor(id:string, sessionId:string, topic:string, description:string, user:string) {
      this.id = id
      this.sessionId = sessionId
      this.topic = topic
      this.description = description
      this.user = user
  }
}
