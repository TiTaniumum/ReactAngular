import { useState } from "react";
import { Doctor } from "../../models/Doctor";
import "./CEditDoctor.css";
import { AcceptDoctor } from "../../shared/DoctorRelated";
import { useGlobalContext } from "../ContextProvider";
import { useNavigate } from "react-router-dom";
import api from "../../shared/api";

export default function CEditDoctor() {
  const doctor: Doctor = AcceptDoctor();
  const [fullname, setFullname] = useState(doctor.fullname);
  const [phone, setPhone] = useState(doctor.phone);
  const [specialization, setSpecialization] = useState(doctor.specialization);
  const navigate = useNavigate();
  function SaveHandle() {
    const newDoctor: Doctor = {
      id: doctor.id,
      fullname: fullname,
      phone: phone,
      specialization: specialization,
    };
    api.addedit(newDoctor);
    alert("Запрос на добавление / изменения отправлен");
    navigate("/");
  }
  function SaveCondition() {
    return (
      (fullname == doctor.fullname &&
        phone == doctor.phone &&
        specialization == doctor.specialization) ||
      specialization == "" ||
      fullname == "" ||
      phone == ""
    );
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="edit"
    >
      <input
        type="text"
        placeholder="Имя врача..."
        value={fullname}
        onChange={(value) => setFullname(value.target.value)}
      />
      <input
        type="text"
        placeholder="Номер врача..."
        value={phone}
        onChange={(value) => setPhone(value.target.value)}
      />
      <input
        type="text"
        placeholder="Специализация..."
        value={specialization}
        onChange={(value) => setSpecialization(value.target.value)}
      />
      <button disabled={SaveCondition()} onClick={SaveHandle}>
        {doctor.id == -1 ? "Добавить" : "Сохранить"}
      </button>
    </form>
  );
}
