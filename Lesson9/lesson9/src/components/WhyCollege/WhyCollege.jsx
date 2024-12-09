import { whyCollege } from '../../data'
import './WhyCollege.css'


export default function WhyCollege(){
    return(
        <section className="why-college-section">
            <h3 className="why-college-section-title">Почему после 9 класса колледж - лучший выбор чем школа?</h3>
            <span className="">
                {whyCollege.map((item, index)=> (<span key={index} className="why-college-section-reason">{item.reason}</span>))}
            </span>
        </section>
    )
}

// const style = StyleSheet.create({
//     display: "flex"
// })