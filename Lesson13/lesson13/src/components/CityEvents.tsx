import { useContext } from "react";
import { useGlobalContext } from "./ContextProvider";

export interface Event {
  name: string;
  description: string;
  date: Date;
}
const events = [
  { name: "mock event", description: "mock description", date: new Date() },
];
export default function CityEvents() {
    const {chosenEvents,setChosenEvents} =  useGlobalContext();
    function handleClick(item: Event){
        setChosenEvents([...chosenEvents,item]);
    }
  return (
    <>
      {events.map((item, index) => (
        <div key={index}>
            <p>{item.name}</p>
            <p>{item.date.toLocaleDateString()}</p>
            <button onClick={()=>{handleClick(item)}}>Add {item.name}</button>
        </div>
      ))}
    </>
  );
}
