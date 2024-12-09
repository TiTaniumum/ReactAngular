import "./ListingSection.css";
import { listingData } from "../../data";
import ListingSectionItem from "../ListingSectionItem/ListingSectionItem";
import Button from "../Button/Button";

export default function ListingSection() {
  return (
    <section className="listing-section">
      <h1 className="listing-section-title">
        <span>СИНЕРГИЯ ШКОЛЬНОЙ ПРОГРАММЫ</span> 
        {' '}по требованиям МИНИСТЕРСТВА
        ОБРАЗОВАНИЯ И IT-предметов
      </h1>
      <ul>
        {listingData.map((item, index)=>(<ListingSectionItem key={index} {...item}/>))}
      </ul>
      
      <Button>Скачать программу Комьютерную графику и дизайн</Button>
      <Button>Скачать программу Разработка программного обеспечения</Button>
    </section>
  );
}
