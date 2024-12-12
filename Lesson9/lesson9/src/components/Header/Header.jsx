import { useState } from "react";
import Button from "../Button/Button";
import TabSection from "../TabSection/TabSection";
import "./Header.css";
import MainSection from "../MainSection/MainSection";

export default function Header() {

  const [tab, setTab] = useState('none');

  return (
    <header>
      <div className="header-container">
        <div className="header-container-main">
          <h3 className="header-container-logo">IT Step College</h3>
          <TabSection click={setTab}/>
        </div>
        {tab !== 'none' && <>{tab}</>}
        {/* {tab === 'main' && <MainSection/>} */}
        <Button
          isSmall={true}
          click={() => {
            alert("button clicked");
          }}
        >
          Записаться на консультацию
        </Button>
      </div>
    </header>
  );
}
