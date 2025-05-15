// Por ejemplo, dentro de src/pages/Home.jsx o cualquier otra página
import BasicCard from "../spotify-cards/BasicCard";

export default function BasicCardPage() {
  return (
    <main style={{ display: "grid", placeItems: "center", minHeight: "100vh", background: "#f3f4f6" }}>
      <BasicCard />
    </main>
  );
}
