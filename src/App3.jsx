// src/App.jsx
import Home from './pages/Home'
import TaskList from './components/TaskList'

const mockTasks = [
  { id: 't1', title: 'Crear proyecto', description: 'Montar Vite y limpiar plantilla', priority: 'high' },
  { id: 't2', title: 'Diseñar componentes', description: 'Header, TaskList, TaskCard, Footer', priority: 'medium' },
  { id: 't3', title: 'Tercera tarea', description: 'Añadida para el ejercicio', priority: 'low' }
]

export default function App() {
  return (
    <Home title="Mi Proyecto Tasker" subtitle="Sesión 1 · Estructura básica">
      <TaskList tasks={mockTasks} />
    </Home>
  )
}

