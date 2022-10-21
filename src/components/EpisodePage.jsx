import { Link, useParams } from "react-router-dom"
import episodes from '../data.json'

function EpisodePage() {
  const { season, episode } = useParams();
  const data = episodes.find((ep) => ep.season === season && ep.number === episode);
  const { title, url, plot } = data;

  const getNextEpisode = () => {
    const next = episodes.find((ep) => ep.season === season && ep.number === (Number(episode) + 1).toString());
    if (next) {
      return { season: next.season, episode: next.number }
    } else {
      return { season: (Number(season) + 1).toString(), episode: '1' }
    }
  }

  return (
    <div className="episode-page">
      <h1 className="page-title">{title}</h1>
      <h3 className="page-info">Season {season} Episode {episode}</h3>
      <iframe
        className="player"
        src={data.url} title={title}
        autoplay='1&fs=1&enablejsapi=1&enablecastapi=1'
        frameborder="0"
        allowfullscreen
      />
      <a href={url}>
        <p className="plot">{plot}</p>
      </a>
      <Link to={`/season/${getNextEpisode().season}/episode/${getNextEpisode().episode}`}>
        <h1>Next Episode {'->'}</h1>
      </Link>
    </div>
  )
}
export default EpisodePage