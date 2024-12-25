import { useEffect, useState } from "react";
import { AcceptDoctor } from "../../shared/DoctorRelated";
import { Doctor } from "../../models/Doctor";
import CTimePicker from "../CTimePicker/CTimePicker";
import "./CSchedule.css";
import { DateSchedule, GetSchedule, HourSchedule } from "../../models/Schedule";
import { useNavigate } from "react-router-dom";
import api from "../../shared/api";

export default function CSchedule() {
  const doctor: Doctor = AcceptDoctor();
  const [dateString, setDateString] = useState<string>("");
  const [time, setTime] = useState(-1);
  const [schedule, setSchedule] = useState<HourSchedule[]>([]);
  const [patientName, setPatientName] = useState("");
  const [busytime, setBusytime] = useState<number[]>([]);
  const navigate = useNavigate();
  function handleDateChange(obj: React.ChangeEvent<HTMLInputElement>) {
    setDateString(obj.target.value);
    api.getschedule(doctor.id, obj.target.value, setSchedule);
    setTime(-1);
  }
  function GetPatientByTime() {
    return schedule.filter((item) => item.schedule_time == time)[0]
      ?.patient_name;
  }
  function GetBusyTime(): number[] {
    return schedule.reduce((acc: number[], item) => {
      acc.push(item.schedule_time);
      return acc;
    }, []);
  }
  function handleAssign() {
    api.setschedule(doctor.id, dateString, time, patientName).then((res) => {
      api.getschedule(doctor.id, dateString, setSchedule);
    });
  }
  useEffect(() => {
    setBusytime(GetBusyTime());
  }, [schedule]);
  return (
    <div className="schedule">
      <p>Запись к врачу: {doctor.fullname}</p>
      <div className="form-field">
        <label htmlFor="patient">Имя пациента</label>
        <input
          type="text"
          id="patient"
          placeholder="..."
          value={patientName}
          onChange={(obj) => setPatientName(obj.target.value)}
        />
      </div>
      <input
        type="date"
        aria-label="Date"
        value={dateString}
        onChange={handleDateChange}
      />
      {(dateString !== "" && (
        <CTimePicker
          v={time}
          change={setTime}
          timebounds={{ left: 7, right: 18 }}
          busy={busytime}
        />
      )) || <p>...</p>}
      {(GetPatientByTime() && (
        <p>Записанный пациент: {GetPatientByTime()}</p>
      )) || <p>...</p>}
      <button
        disabled={time == -1 || patientName == "" || busytime.includes(time)}
        onClick={handleAssign}
      >
        Назначить
      </button>
    </div>
  );
}
