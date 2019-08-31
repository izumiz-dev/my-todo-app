import Dexie from "dexie"

const db = new Dexie("TodoLists")
db.version(1).stores({ newLists: "++id, isDone" })

export default db
