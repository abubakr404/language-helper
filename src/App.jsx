import NotFound from "./pages/errors/NotFound";
import Layout from "./components/layouts/Layout";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import ListWords from "./pages/words/list/ListWords";
import SingleWord from "./pages/words/single/SingleWord";
import NewWord from "./pages/words/new/NewWord";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

const App = () => {
  const currentMode = useSelector((state) => state.theme.mode);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const Auth = ({ children }) => (isLoggedIn ? children : <Navigate to="home" />);

  return (
    <div className={currentMode ? "app toggleMode" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="home" element={isLoggedIn ? <Navigate to="/" /> : <Home />} />
          <Route
            path="/"
            element={
              <Auth>
                <Layout />
              </Auth>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="words">
              <Route index element={<ListWords />} />
              <Route path=":wordId" element={<SingleWord />} />
              <Route path="new-word" element={<NewWord />} />
            </Route>
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
