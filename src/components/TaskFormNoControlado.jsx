import { useRef } from "react"

export default function TaskFormNoControlado({ onAdd }) {
  const titleRef = useRef(null)
  const priorityRef = useRef(null)
  const descriptionRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    const title = titleRef.current.value
    const priority = priorityRef.current.value
    const description = descriptionRef.current.value
    if (!title.trim() || title.trim().length < 3) return

    onAdd({ id: crypto.randomUUID(), title, description, priority, done: false })
    titleRef.current.value = ""
    descriptionRef.current.value = ""
    priorityRef.current.value = "medium"
    titleRef.current.focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={titleRef} placeholder="Título de la tarea" />
      <textarea ref={descriptionRef} placeholder="Descripción (opcional)" rows={3} />
      <label>
        Prioridad:{" "}
        <select ref={priorityRef} defaultValue="medium">
          <option value="low">Baja</option>
          <option value="medium">Media</option>
          <option value="high">Alta</option>
        </select>
      </label>
      <button type="submit">Añadir</button>
    </form>
  )
}
