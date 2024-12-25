import { useState } from "react";
import CButton from "../CButton/CButton";
import "./CTimePicker.css";
export default function CTimePicker({
  v,
  change,
  timebounds,
  busy
}: {
  v: number;
  change: React.Dispatch<React.SetStateAction<number>>;
  timebounds: { left: number; right: number };
  busy: number[]
}) {
  const [selected, setSelected] = useState(v);
  function HandleClick(idx: number, isActive: boolean) {
    if (selected == idx && isActive) {
      setSelected(idx);
      change(-1);
    } else {
      setSelected(idx);
      change(idx);
    }
  }
  const buttons = (() => {
    const components = [];
    for (let i = timebounds.left; i <= timebounds.right; i++) {
      components.push(
        <CButton
          click={HandleClick}
          index={i}
          selected={selected}
          isAvailable={!busy.includes(i)}
        >
          {i}:00
        </CButton>
      );
    }
    return components;
  })();
  return (
    <div className="time-picker timepicker-height">
      {buttons.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}
