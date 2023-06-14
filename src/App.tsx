import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <main>
      <div>
        <h1>2do Parcial de Ing de Sw - 2022</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="about">About</Link>
        </nav>
      </div>
      <Outlet />
    </main>
  );
}

export default App;
