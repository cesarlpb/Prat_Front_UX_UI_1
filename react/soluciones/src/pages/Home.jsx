import { Link } from "react-router-dom";

const demoPages = [
  {
    path: "/spotify-cards/basic",
    label: "Nivel 1 – Básico (SongCard estático)",
    brief: "Sin props, todo hard-coded",
  },
  {
    path: "/spotify-cards/props",
    label: "Nivel 2 – Reusable con props",
    brief: "Recibe datos y los muestra",
  },
  {
    path: "/spotify-cards/dynamic",
    label: "Nivel 3 – Lista dinámica",
    brief: "Renderiza varias tarjetas desde un array",
  },
];

export default function Home() {
  return (
    <section className="mx-auto max-w-xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Ejercicios Spotify Cards</h1>

      <ul className="space-y-3">
        {demoPages.map(({ path, label, brief }) => (
          <li key={path}>
            <Link
              to={path}
              className="block rounded-lg border border-gray-200 bg-white p-4 shadow hover:bg-gray-50"
            >
              <h2 className="text-lg font-semibold">{label}</h2>
              <p className="text-sm text-gray-600">{brief}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
