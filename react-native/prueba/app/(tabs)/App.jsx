import Form from "../Form.jsx";
import { submitForm } from "./actions.js";

export default function App() {
  return <Form action={submitForm} />;
}
