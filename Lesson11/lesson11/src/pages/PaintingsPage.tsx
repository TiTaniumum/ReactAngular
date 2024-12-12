import "../styles/painging.css";
import { Link } from "react-router-dom";
import { ps } from "../scrypts/users";

export default function PaintingsPage() {
  return (
    <>
      <Link to="/">Go back</Link>
      <div className="content">
        {ps.paintings.map((painting, index) => (
          <div className="painting" key={index}>
            <Link to={`/painting/${painting.id}`}>Go to picture</Link>
            <div className="painting">
              <h4>{painting.name}</h4>
              <img src={painting.link} alt="" />
              <p>year: {painting.year}</p>
              <p>author: {painting.author}</p>
              <p>size: {painting.size}</p>
              <p>place: {painting.place}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
