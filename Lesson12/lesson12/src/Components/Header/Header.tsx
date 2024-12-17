import { faGithub, faTelegram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ImgLink from "../ImgLink/ImgLink";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src="src/assets/avatar.jpg" alt="" />
      <div className="flexColumn">
        <h2>Yelemanov Temirlan</h2>
        <h3>Full stack developer</h3>
      </div>
      <div className="flexColumn">
        <ImgLink link="https://github.com/TiTaniumum" icon={faGithub}/>
        <ImgLink link="" icon={faTelegram}/>
        <ImgLink link="" icon={faLinkedin}/>
        <ImgLink link="" icon={faYoutube}/>
      </div>
    </header>
  );
}
