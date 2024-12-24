import { ReactNode, useEffect, useState } from "react";
import "./CButton.css";
export default function CButton({
  children,
  click,
  index,
  selected,
  isAvailable,
}: {
  children: ReactNode;
  click: (idx: number, isActive: boolean) => void;
  index: number;
  selected: number;
  isAvailable: boolean;
}) {
  const [idx, setIdx] = useState(index);
  const [isActive, setIsActive] = useState(false);
  function HandleClick() {
    setIsActive(!isActive);
    click(idx, isActive);
  }
  useEffect(() => {
    if (selected != idx) {
      setIsActive(false);
    }
  }, [selected]);

  return (
    <button className={`${isActive ? "activated" : ""} ${isAvailable ? '' : 'busy'}`} onClick={HandleClick}>
      {children}
    </button>
  );
}
