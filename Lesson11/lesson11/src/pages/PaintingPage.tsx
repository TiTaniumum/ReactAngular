import { Link, useParams } from "react-router-dom";
import { ps } from "../scrypts/users";
import '../styles/painting.css';
export default function PaintingPage() {
  const id = Number(useParams<{ id: string }>().id);
  const painting = ps.getPainting(id);
  const authorPaintings = ps.getPaintingsByAuthor(painting.author, painting.id);
  return (
    <div className="painting-content">
        <Link to='/paintings'>Go back</Link>
      <div className="painting-painting">
        <h4>{painting.name}</h4>
        <img src={painting.link} alt="" />
        <p>year: {painting.year}</p>
        <p>author: {painting.author}</p>
        <p>size: {painting.size}</p>
        <p>place: {painting.place}</p>
      </div>
      <div className="other">
        {authorPaintings.map((p, index) => (
          <div className="painting-mini" key={index}>
            <h4>{p.name}</h4>
            <img src={p.link} alt="" />
            <p>year: {p.year}</p>
            <p>author: {p.author}</p>
            <p>size: {p.size}</p>
            <p>place: {p.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
