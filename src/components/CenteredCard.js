import "./style.css";

function CenteredCard({ children }) {
  return (
    <div className="divDentro">
      <span>{children}</span>
    </div>
  );
}
export default CenteredCard;
