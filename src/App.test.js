import { Link, Outlet } from "react-router-dom";

function App() {
  const titulo = "2do Parcial de Ing de Sw - 2023";

  return (
    <main>
      <div>
        <h1>{titulo}</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="about">About</Link>
        </nav>
      </div>
      <Outlet />
    </main>
  );
}

export default App;