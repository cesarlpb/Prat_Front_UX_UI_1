import DynamicCards from "../spotify-cards/DynamicCards";

export default function DynamicCardPage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
        Lista dinámica de canciones
      </h1>

      {/* Renderiza la cuadrícula de tarjetas */}
      <DynamicCards />
    </main>
  );
}
