import { useParams } from "react-router-dom";
import { Doctor } from "../models/Doctor";
import { useGlobalContext } from "../components/ContextProvider";

export function AcceptDoctor(): Doctor{
    const doctorID:number = Number(useParams<{ id: string }>().id);
    if(doctorID == -1){
        return {id: -1, fullname: '', phone: '', specialization: ''};
    }
    const {doctorlist} = useGlobalContext();
    const doctor: Doctor = doctorlist.filter(item=>item.id == doctorID)[0];
    return doctor
}