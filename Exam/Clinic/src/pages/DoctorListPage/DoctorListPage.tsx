import CDoctor from "../../components/CDoctor/CDoctor";
import { doctorList } from "../../models/Doctor";
import './DoctorListPage.css'
export default function DoctorListPage() {
  return (
    <div className="doctor-list">
      {doctorList.map((item, index) => (
        <CDoctor doctor={item} key={index}/>
      ))}
    </div>
  );
}
