import seasons from "../seasons.json";
import { Link } from "react-router-dom";

function SeasonGrid() {
  return (
    <div className="season-grid">
      {seasons.map((season, i) => {
        return (
          <Link
            to={`/season/${i + 1}`}
            className="season-image"
            key={season.imageurl}
          >
            <img src={season.imageurl} alt={`season ${i + 1}`} />
          </Link>
        );
      })}
    </div>
  );
}
export default SeasonGrid;
