import { whyItStep } from "../../data";
import Button from "../Button/Button";

export default function WhyItStep(){
    return (
        <section className="why-college-section flex gap">
            <h1>ПОЧЕМУ НУЖНО ВЫБРАТЬ ИМЕННО IT STEP КОЛЛЕДЖ?</h1>
            <ul>
                {whyItStep.map((item, index)=><li key={index}>{item.reason}</li>)}
            </ul>
            <Button click={()=>{alert('Вы подписали документ об отказе своей свободы воли, теперь вы раб!')}}>Записаться на консультацию</Button>
        </section>
    )
}