import { Link, useParams } from "react-router-dom";

export default function CityInfo(){
    const cityName = useParams<{ name: string }>().name;
    return (
        <>
            <Link to="/Cities">Go Back</Link>
            <p>
                City: {cityName} <br />
                You chose this city -.-
            </p>
            <Link to={`/CityAttractions/${cityName}`}>To city attractions</Link>
        </>
    )
}