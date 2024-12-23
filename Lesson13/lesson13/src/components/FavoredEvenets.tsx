import { useGlobalContext } from "./ContextProvider";

export default function FavoredEvents(){
    const {chosenEvents} =  useGlobalContext();
    return (
        <>
        {chosenEvents.map((item,index)=>(
            <div key={index}>
                {item.name}
            </div>
        ))}
        </>
    )
}