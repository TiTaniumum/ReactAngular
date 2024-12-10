import { whyItStep } from "../../data";

export default function WhyItStep(){
    return (
        <section className="why-college-section flex gap">
            <h1>ПОЧЕМУ НУЖНО ВЫБРАТЬ ИМЕННО IT STEP КОЛЛЕДЖ?</h1>
            <ul>
                {whyItStep.map((item, index)=><li key={index}>{item.reason}</li>)}
            </ul>
        </section>
    )
}