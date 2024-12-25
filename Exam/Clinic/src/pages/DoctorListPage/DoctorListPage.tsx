import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CDoctor from "../../components/CDoctor/CDoctor";
import './DoctorListPage.css'
import { faPersonCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../components/ContextProvider";
import api from "../../shared/api";
import { useEffect } from "react";
export default function DoctorListPage() {
  const navigate = useNavigate();
  const {doctorlist, setDoctorlist} = useGlobalContext();
  useEffect(()=>{
    api.doctorlist(setDoctorlist);
  },[]);
  useEffect(()=>{},[doctorlist])
  return (
    <div className="doctor-list">
      <button onClick={()=>{navigate('/edit/-1')}} > <FontAwesomeIcon icon={faPersonCirclePlus} size="1x" /> </button>
      {doctorlist.map((item, index) => (
        <CDoctor doctor={item} key={index}/>
      ))}
    </div>
  );
}