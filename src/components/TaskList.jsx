import TaskCard from "./TaskCard"

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (!tasks?.length) {
    return <div className="empty" role="status">No hay tareas aún.</div>
  }
  return (
    <section className="grid" aria-live="polite">
      {tasks.map(t => (
        <TaskCard
          key={t.id}
          id={t.id}
          title={t.title}
          description={t.description}
          priority={t.priority}
          done={t.done}
          onToggle={() => onToggle(t.id)}
          onDelete={onDelete}
        />
      ))}
    </section>
  )
}
