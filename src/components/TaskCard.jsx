export default function TaskCard({ id, title, description, priority, done, onToggle, onDelete }) {
  return (
    <article className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
        <h3 style={{ margin: '0 0 6px', textDecoration: done ? 'line-through' : 'none' }}>{title}</h3>
        <span className={`badge ${priority}`}>{priority}</span>
      </div>

      {description && <p style={{ margin: 0, color: '#475569' }}>{description}</p>}

      <div style={{ marginTop: 8, display: 'flex', gap: 8, alignItems: 'center' }}>
        <label style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <input type="checkbox" checked={!!done} onChange={onToggle} />
          {done ? 'Completada ✅' : 'Pendiente ⏳'}
        </label>
        <button type="button" onClick={() => onDelete(id)}>❌ Eliminar</button>
      </div>
    </article>
  )
}
