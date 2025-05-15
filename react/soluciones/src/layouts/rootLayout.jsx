import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/about">Acerca</NavLink>
      </nav>

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
