import axios from "axios";
import { Doctor } from "../models/Doctor";
import { useGlobalContext } from "../components/ContextProvider";
import moment from "moment";
import { DateSchedule, HourSchedule } from "../models/Schedule";

export default class api {
  static baseurl: string = "http://localhost:3000/api";
  static doctorlist(setter: any): Doctor[] {
    axios.get(`${this.baseurl}/doctorlist`).then((res) => {
      setter(res.data);
    });
    return [];
  }
  static addedit(doctor: Doctor) {
    axios.post(`${this.baseurl}/addedit`, { doctor: doctor }).then((res) => {});
  }
  static delete(id: number) {
    axios.post(`${this.baseurl}/delete/${id}`).then((res) => {});
  }
  static getschedule(doctorid: number, datestring: string, setter: any) {
    const date = moment(new Date(datestring)).format("YYYYMMDD");
    axios
      .post(`${this.baseurl}/getschedule`, {
        doctorid: doctorid,
        scheduledate: date,
      })
      .then((res) => {
        setter(res.data);
      });
  }
  static setschedule(
    doctorid: number,
    scheduledate: string,
    scheduletime: number,
    patientname: string
  ) {
    const date = moment(new Date(scheduledate)).format("YYYYMMDD");
    return axios
      .post(`${this.baseurl}/setschedule`, {
        doctorid: doctorid,
        scheduledate: date,
        scheduletime: scheduletime,
        patientname: patientname,
      });
  }
}
