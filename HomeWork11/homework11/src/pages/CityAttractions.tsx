import { Link, useParams } from "react-router-dom";

export default function CityAttractions() {
  const cityName = useParams<{ name: string }>().name;
  return (
    <>
        <Link to='/Cities'>Cities</Link>
      {cityName === "Astana" && (
        <>
          <img
            src="https://culturemap.kz/media/photo/67/1419247234mh3dq-page.jpg"
            alt=""
          />
          <p>Эту статую реставрируют на данный момент.</p>
        </>
      )}
    </>
  );
}
