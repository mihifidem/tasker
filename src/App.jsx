import { useMemo, useState } from "react"
import Home from "./pages/Home"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import TareasContador from "./components/TareasContador"

const mock = [
  { id: "t1", title: "Crear proyecto", description: "Vite + limpieza", priority: "high", done: false },
  { id: "t2", title: "Diseñar UI", description: "Home, TaskList, TaskCard", priority: "medium", done: false },
  { id: "t3", title: "Ejercicio 3", description: "Validación mínima", priority: "low", done: true },
]

export default function App() {
  const [tasks, setTasks] = useState(mock)
  const pendingCount = useMemo(() => tasks.filter(t => !t.done).length, [tasks])

  function addTask(task) {
    setTasks(prev => [...prev, task])
  }

  function toggleTask(id) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  function deleteTask(id) {
    if (!confirm("¿Seguro que quieres eliminar esta tarea?")) return
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  function reloadMock() {
    setTasks(mock)
  }

  return (
    <Home
      title="Mi Proyecto Tasker"
      subtitle={pendingCount === 0 ? "¡Todas completadas! 🎉" : "Sesión 3 · Estado, Eventos y Formularios"}
    >
      {/* Contador + utilidades */}
      <TareasContador tasks={tasks} setTasks={setTasks} onReload={reloadMock} />

      {/* Formulario controlado */}
      <TaskForm onAdd={addTask} />

      {/* Mensaje condicional si todas están hechas */}
      {pendingCount === 0 && tasks.length > 0 && (
        <p style={{ color: "green", marginTop: 8 }}>No tienes tareas pendientes ✅</p>
      )}

      {/* Lista de tareas */}
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </Home>
  )
}
