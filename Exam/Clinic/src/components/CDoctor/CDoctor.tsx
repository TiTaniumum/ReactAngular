import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Doctor } from "../../models/Doctor";
import "./CDoctor.css";
import { faCalendar, faEdit } from "@fortawesome/free-regular-svg-icons";
import {faX} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import api from "../../shared/api";
export default function CDoctor({ doctor }: { doctor: Doctor }) {
    const navigate = useNavigate();
  return (
    <div className="doctor">
      <div className="info">
        <p>{doctor.fullname}</p>
        <p>{doctor.phone}</p>
        <p>{doctor.specialization}</p>
      </div>
      <div className="buttons">
        <button onClick={()=>{navigate(`/schedule/${doctor.id}`)}}>
          <FontAwesomeIcon icon={faCalendar} size="1x" />
        </button>
        <button onClick={()=>{navigate(`/edit/${doctor.id}`)}}>
          <FontAwesomeIcon icon={faEdit} size="1x" />
        </button>
        <button onClick={()=>{api.delete(doctor.id), navigate('/loading')}}>
          <FontAwesomeIcon icon={faX} size="1x" />
        </button>
      </div>
    </div>
  );
}
