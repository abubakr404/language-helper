import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { notificationActions } from "../../store/notification-slice";
import axios from "axios";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const apiUri = useSelector((state) => state.environment.apiUri);
  const wordsReFetch = useSelector((state) => state.environment.wordsFetchRefersh);
  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem("user"));
    const getWords = async () => {
      try {
        const { data } = await axios.get(apiUri + "words", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        localStorage.setItem("words", JSON.stringify(data.data));
      } catch (error) {
        dispatch(notificationActions.close());
        dispatch(
          notificationActions.addMessage(
            error.response ? error.response.data.msg : error.message
          )
        );
        dispatch(notificationActions.open());
      }
    };
    getWords();
  }, []);

  return (
    <main className="page">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <section className="page-content">
        <Navbar />
        <Outlet />
      </section>
    </main>
  );
};

export default DashboardLayout;
