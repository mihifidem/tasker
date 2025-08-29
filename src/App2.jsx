import Header from './components/Header'
import Footer from './components/Footer'
import TaskList from './components/TaskList'

const mockTasks = [
  { id: 't1', title: 'Crear proyecto', description: 'Montar Vite y limpiar plantilla', priority: 'high' },
  { id: 't2', title: 'Diseñar componentes', description: 'Header, TaskList, TaskCard, Footer', priority: 'medium' },
  { id: 't3', title: 'Tercera tarea', description: 'Añadida para el ejercicio', priority: 'low' }

]

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <TaskList tasks={mockTasks} />
      </main>
      <Footer />
    </div>
  )
}
