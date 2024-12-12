import { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import "./MainSection.css";

export default function MainSection() {
  const [modal, setModal] = useState(false);

  return (
    <section className="main-section">
      <div className="main-section-container">
        <h1>IT STEP КОЛЛЕДЖ {">"} лучший выбор после 9 класса</h1>
        <p>Современный лецензированный колледж с IT-специалистами</p>
        <Button
          click={() => {
            setModal(true);
          }}
        >
          Записаться на консультацию
        </Button>
      </div>
      <Modal isOpen={modal} setOpen={setModal}></Modal>
    </section>
  );
}
