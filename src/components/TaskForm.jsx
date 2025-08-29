import { useState } from "react"

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("medium")

  const tooShort = title.trim().length > 0 && title.trim().length < 3

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim() || tooShort) return

    const newTask = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      priority,
      done: false
    }
    onAdd(newTask)
    setTitle("")
    setDescription("")
    setPriority("medium")
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 12 }}>
      <div style={{ display: "grid", gap: 8, maxWidth: 520 }}>
        <input
          type="text"
          placeholder="Título de la tarea"
          value={title}
          onChange={e => setTitle(e.target.value)}
          aria-invalid={tooShort}
          required
        />
        {tooShort && (
          <small style={{ color: "#b91c1c" }}>
            El título debe tener al menos 3 caracteres.
          </small>
        )}
        <textarea
          placeholder="Descripción (opcional)"
          value={description}
          onChange={e => setDescription(e.target.value)}
          rows={3}
        />
        <label>
          Prioridad:{" "}
          <select value={priority} onChange={e => setPriority(e.target.value)}>
            <option value="low">Baja</option>
            <option value="medium">Media</option>
            <option value="high">Alta</option>
          </select>
        </label>
        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit" disabled={title.trim().length < 3}>Añadir tarea</button>
          <button
            type="button"
            onClick={() => { setTitle(""); setDescription(""); setPriority("medium") }}
          >
            Limpiar
          </button>
        </div>
      </div>

      {/* Vista previa */}
      {(title || description) && (
        <div className="card" style={{ marginTop: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
            <strong>Vista previa:</strong>
            <span className={`badge ${priority}`}>{priority}</span>
          </div>
          <p style={{ margin: '6px 0' }}>
            <strong>{title || '(sin título)'}</strong>
          </p>
          {description && <p style={{ margin: 0, color: '#475569' }}>{description}</p>}
        </div>
      )}
    </form>
  )
}
