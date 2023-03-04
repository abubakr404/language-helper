import NotFound from "./pages/errors/NotFound";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Layout from "./components/layouts/Layout";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import ListWords from "./pages/words/list/ListWords";
import SingleWord from "./pages/words/single/SingleWord";
import NewWord from "./pages/words/new/NewWord";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";

const App = () => {
  const currentMode = useSelector((state) => state.currentMode);

  return (
    <div className={currentMode ? "app toggleMode" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
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
