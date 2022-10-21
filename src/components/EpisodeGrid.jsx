import EpisodeItem from "./EpisodeItem"
import episodes from '../data.json'
import { Link, useParams } from "react-router-dom"

function EpisodeGrid() {
  const { season } = useParams();
  const episodeList = season ? episodes.filter((ep) => ep.season === season) : episodes;

  return (
    <div className="main-container">
      <div className="nav">
        {[...Array(10)].map((_, i) =>
          <Link to={`/season/${i + 1}`}>
            <button className={'nav-button' + (i + 1 === Number(season) ? ' selected' : '')}>
              {window.innerWidth < 600 ? `S${i + 1}` : `Season ${i + 1}`}
            </button>
          </Link>
        )}
      </div>
      <div className="ep-container">
        {episodeList.map((ep) => {
          return <EpisodeItem episode={ep} key={ep.title} />
        })}
      </div>
    </div>
  )
}
export default EpisodeGrid