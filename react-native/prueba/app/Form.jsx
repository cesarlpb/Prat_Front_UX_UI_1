import Submit from "./Submit.jsx";

export default function Form({ action }) {
  return (
    <form action={action}>
      <Submit />
    </form>
  );
}
