// src/pages/Home.jsx
export default function Home({ children, title = 'Mi Proyecto Tasker', subtitle = 'Sesión 1 · Estructura básica' }) {
  const year = new Date().getFullYear()
  return (
    <div className="app">
      <header>
        <div className="container">
          <h1 style={{margin:0}}>{title}</h1>
          <p style={{margin:0, opacity:.8}}>{subtitle}</p>
        </div>
      </header>

      <main className="container">
        {children /* <- aquí inyectamos las tarjetas u otros contenidos */}
      </main>

      <footer>
        <div className="container">© {year} · Proyecto Global React</div>
      </footer>
    </div>
  )
}
