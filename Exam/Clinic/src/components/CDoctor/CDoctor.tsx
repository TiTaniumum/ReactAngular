import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Doctor } from "../../models/Doctor";
import "./CDoctor.css";
import { faCalendar, faEdit } from "@fortawesome/free-regular-svg-icons";
import {faX} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export default function CDoctor({ doctor }: { doctor: Doctor }) {
    const navigate = useNavigate();
  return (
    <div className="doctor">
      <div className="info">
        <p>{doctor.FullName}</p>
        <p>{doctor.Phone}</p>
        <p>{doctor.Specialization}</p>
      </div>
      <div className="buttons">
        <button>
          <FontAwesomeIcon icon={faCalendar} size="1x" />
        </button>
        <button onClick={()=>{navigate(`/edit/${doctor.id}`)}}>
          <FontAwesomeIcon icon={faEdit} size="1x" />
        </button>
        <button>
          <FontAwesomeIcon icon={faX} size="1x" />
        </button>
      </div>
    </div>
  );
}
