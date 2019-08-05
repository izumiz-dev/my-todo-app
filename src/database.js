import Dexie from "dexie"

const db = new Dexie("TodoLists")
db.version(1).stores({ todoLists: "++id", })

export default db