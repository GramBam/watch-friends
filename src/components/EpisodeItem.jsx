import { Link } from "react-router-dom";

function EpisodeItem({ episode }) {
  const { title, plot, number, season, image } = episode;

  return (
    <div className="episode-item">
      <Link to={`/season/${season}/episode/${number}`}>
        <h3 title={plot} className="title">
          {title}
        </h3>
        <img className="image" src={image} alt="title" />
        <p className="info">
          Season {season} Episode {number}
        </p>
      </Link>
    </div>
  );
}
export default EpisodeItem;
