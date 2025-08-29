import initSqlJs from "sql.js"

let db = null

export async function initDb() {
  if (db) return db

  const SQL = await initSqlJs({
    locateFile: file => `https://sql.js.org/dist/${file}`
  })

  // Abrimos archivo en el OPFS (Origin Private File System)
  const fileName = "tasks.sqlite"
  const stream = await navigator.storage.getDirectory()
  const handle = await stream.getFileHandle(fileName, { create: true })
  const file = await handle.getFile()

  if (file.size > 0) {
    // cargar base de datos existente
    const buffer = await file.arrayBuffer()
    db = new SQL.Database(new Uint8Array(buffer))
  } else {
    // crear base de datos nueva
    db = new SQL.Database()
    db.run(`
      CREATE TABLE IF NOT EXISTS tasks (
        id TEXT PRIMARY KEY,
        title TEXT,
        priority TEXT,
        done INTEGER
      );
    `)
    await saveDb(handle) // guardar la nueva base vacía
  }

  db._handle = handle // guardamos el handle para usar en saveDb
  return db
}

async function saveDb(handle) {
  const data = db.export()
  const blob = new Blob([data])
  const writable = await handle.createWritable()
  await writable.write(blob)
  await writable.close()
}

// Operaciones CRUD
export async function addTask(task) {
  db.run(
    `INSERT INTO tasks (id, title, priority, done) VALUES (?, ?, ?, ?)`,
    [task.id, task.title, task.priority, task.done ? 1 : 0]
  )
  await saveDb(db._handle)
}

export function getTasks() {
  const res = db.exec("SELECT * FROM tasks")
  if (res.length === 0) return []
  return res[0].values.map(([id, title, priority, done]) => ({
    id,
    title,
    priority,
    done: !!done
  }))
}

export async function toggleTask(id) {
  db.run(`UPDATE tasks SET done = NOT done WHERE id = ?`, [id])
  await saveDb(db._handle)
}

