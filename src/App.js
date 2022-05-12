import Codenames from './components/codenames';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate, } from 'react-router-dom'

 // const savedNickname = localStorage.getItem(NICKNAME_STORAGE_KEY);
// const savedPlayer = localStorage.getItem(PLAYER_STORAGE_KEY);

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Codenames />} />
        {/* <Route path="/create" element={<CreatePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route
          path="/nickname"
          element={<SetupNickname onSubmit={() => navigate('/')} />}
        />
        <Route
          path="/:matchID"
          element={nickname ? <GameLobby /> : <SetupNickname />}
        />
        <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
  );
}

export default App;
