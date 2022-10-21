import './App.css';
import EpisodeItem from './EpisodeItem';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EpisodePage from './EpisodePage';
import EpisodeGrid from './EpisodeGrid';


const getTitle = () => {
  const colors = ['#F24B38', '#02B0F1', '#F4CA3C', '#F24B38', '#F4CA3C', '#02B0F1']
  return ['F', 'R', 'I', 'E', 'N', 'D', 's',].map((char, i) => {
    return (
      <span>{char}<span style={{ color: colors[i] }}>{(i < 6 ? ' • ' : '')}</span></span>
    )
  })
}

function App() {
  return (
    <>
      <Link to="/">
        <h1 className='main-title'>{getTitle()}</h1>
      </Link>
      <Routes>
        <Route path='/' element={<EpisodeGrid />} />
        <Route path='/season/:season' element={<EpisodeGrid />} />
        <Route path='/season/:season/episode/:episode' element={<EpisodePage />} />
      </Routes>

    </>

  );
}

export default App;
