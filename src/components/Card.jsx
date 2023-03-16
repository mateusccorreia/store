import Button from "./Button";
import '../styles/Card.css'

const status = ["asdasd", "warning", "danger", 'success', 'warning'];

export function Card() {
  return (
    <div className="container">
      {status.map((status, key) => (
        <Button name="Button" status={status} key={key} />
      ))}
    </div>
  );
}
