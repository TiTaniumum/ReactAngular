import Button from '../Button/Button';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <h3>IT Step College</h3>
        <Button isSmall={true} click={()=>{alert('button clicked')}}>Записаться на консультацию</Button>
      </div>
    </header>
  );
}
