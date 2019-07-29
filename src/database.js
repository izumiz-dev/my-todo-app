import Dexie from "dexie"

const db = new Dexie("TodoLists")
// todosテーブルを定義
// Primaryキーはid isDoneはタスクが完了したかどうか
db.version(1).stores({ todoLists: "++id", })

export default db