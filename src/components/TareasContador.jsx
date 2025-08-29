export default function TareasContador({ tasks, setTasks, onReload }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
      <p style={{ margin: 0 }}>Pendientes: {tasks.filter(t => !t.done).length} · Totales: {tasks.length}</p>
      <button type="button" onClick={() => setTasks([])}>🗑️ Vaciar lista</button>
      <button type="button" onClick={onReload}>↺ Cargar 3 de ejemplo</button>
    </div>
  )
}
