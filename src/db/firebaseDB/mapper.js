module.exports.parseSnapshotToMap = function (querySnapshot, callback) {
  var map = {}
  querySnapshot.forEach(doc => {
    var note = doc.data()
    note['id'] = doc.id
    const topic = note.topic
    if (!map[note.topic]) {
      map[topic] = []
    }
    map[topic].push(note)
  })

  callback(map)
}
