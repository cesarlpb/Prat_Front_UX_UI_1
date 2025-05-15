// src/pages/ErrorPage.jsx
import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  // Algunos loaders/actions devuelven Response; otros lanzan Error.
  const status  = error?.status  || 500;                      // ej. 404, 401…
  const message =
    error?.statusText || error?.message || "Algo salió mal";

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center
                 bg-gray-50 p-6 text-center"
    >
      <h1 className="text-6xl font-bold text-red-600">{status}</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        {message}
      </h2>

      {/* Si el loader devolvió más info (por ejemplo error.data), la mostramos */}
      {error?.data && (
        <pre className="mt-4 rounded bg-gray-100 p-4 text-left text-sm">
          {JSON.stringify(error.data, null, 2)}
        </pre>
      )}

      <Link
        to="/"
        className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3
                   text-white transition hover:bg-blue-700"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
