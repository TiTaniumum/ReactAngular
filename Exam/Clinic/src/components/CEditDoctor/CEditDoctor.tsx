import { useState } from "react";
import { Doctor } from "../../models/Doctor";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../ContextProvider";
import "./CEditDoctor.css";

export default function CEditDoctor(){
    const doctorID:number = Number(useParams<{ id: string }>().id);
    const {doctorlist} = useGlobalContext();
    const doctor: Doctor = doctorlist.filter(item=>item.id == doctorID)[0];
    const [fullname, setFullname] = useState(doctor.FullName);
    const [phone, setPhone] = useState(doctor.Phone);
    const [specialization, setSpecialization] = useState(doctor.Specialization);

    function SaveHandle(){
        
    }

    return (
        <form onSubmit={(e)=>{e.preventDefault()}} className="edit">
            <input type="text" value={fullname} onChange={(value)=>setFullname(value.target.value)}/>
            <input type="text" value={phone} onChange={(value)=>setPhone(value.target.value)}/>
            <input type="text" value={specialization} onChange={(value)=>setSpecialization(value.target.value)}/>
            <button onClick={SaveHandle}>Сохранить</button>
        </form>
    )
}