import { useState } from "react";
import { AcceptDoctor } from "../../shared/DoctorRelated";
import { Doctor } from "../../models/Doctor";
import CTimePicker from "../CTimePicker/CTimePicker";
import "./CSchedule.css";
import { DateSchedule, GetSchedule } from "../../models/Schedule";

export default function CSchedule() {
  const doctor: Doctor = AcceptDoctor();
  const [dateString, setDateString] = useState<string>("");
  const [time, setTime] = useState(-1);
  const [schedule, setSchedule] = useState<DateSchedule | null>(null)
  function handleDateChange(obj: React.ChangeEvent<HTMLInputElement>) {
    setDateString(obj.target.value);
    setSchedule(GetSchedule(obj.target.value));
    setTime(-1);
  }
  function GetPatientByTime(){
    return schedule?.hours.filter(item=>item.hour == time)[0]?.patient;
  }
  function GetBusyTime(){
    return schedule?.hours.reduce((acc:number[], item)=>{
        acc.push(item.hour);
        return acc;
    },[]);
  }
  return (
    <div className="schedule">
      <p>Запись к врачу: {doctor.FullName}</p>
      <div className="form-field">
        <label htmlFor="patient">Имя пациента</label>
        <input type="text" id="patient" placeholder="..." />
      </div>
      <input
        type="date"
        aria-label="Date"
        value={dateString}
        onChange={handleDateChange}
      />
      {dateString !== "" && (
        <CTimePicker
          v={time}
          change={setTime}
          timebounds={{ left: 7, right: 18 }}
          busy={GetBusyTime() ?? []}
        />
      )}
      {GetPatientByTime() && (
        <p>Записанный пациент: {GetPatientByTime()}</p>
      )}
    </div>
  );
}