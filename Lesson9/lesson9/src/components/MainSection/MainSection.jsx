import Button from "../Button/Button";
import "./MainSection.css";

export default function MainSection() {
  return (
    <section className="main-section">
      <div className="main-section-container">
        <h1>IT STEP КОЛЛЕДЖ {">"} лучший выбор после 9 класса</h1>
        <p>Современный лецензированный колледж с IT-специалистами</p>
        <Button click={()=>{alert('button clicked')}}>Записаться на консультацию</Button>
      </div>
    </section>
  );
}
