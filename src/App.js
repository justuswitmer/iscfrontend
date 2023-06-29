
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import InfiniteArticles from './components/InfiniteArticles';
import { ROUTES } from './constants/routes';
import Header from './components/Header';
import LandingPage from "./components/LandingPage";
import SingleArticle from "./components/SingleArticle";

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path={ROUTES.LANDING_PAGE} element={<LandingPage />} />
          <Route path={ROUTES.INFINITE_ARTICLES} element={<InfiniteArticles />} />
          <Route path={`article/:slug`} element={<SingleArticle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
