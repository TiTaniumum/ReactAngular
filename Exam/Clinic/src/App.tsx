import "./App.css";
import {
  Outlet,
  useNavigate,
} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return <>
    <header>
      <button onClick={()=>{navigate('/')}}>Список врачей</button>
    </header>
    <main>
      <Outlet/>
    </main>
  </>;
}

export default App;
