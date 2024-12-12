import "./TabSection.css";

export default function TabSection({click}) {
  return (
    <div className="header-container-list">
      <button className="header-container-item" onClick={()=>click('main')}>Главная</button>
      <button className="header-container-item" onClick={()=>click('info')}>Иформация</button>
      <button className="header-container-item" onClick={()=>click('prog')}>Программа</button>
      <button className="header-container-item" onClick={()=>click('why')}>Почему</button>
    </div>
  );
}
