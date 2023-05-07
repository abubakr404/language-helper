import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../../components/pagination/Pagination";

const List = () => {
  const [wordsInPage, setWordsInPage] = useState([]);
  const wordsData = JSON.parse(localStorage.getItem("words")) || [];

  return (
    <section className="content words">
      <div className="content-container">
        <div className="content-head">
          <h2 className="main-title">Words List</h2>
          <Link to="new-word" className="link">
            New Word
          </Link>
        </div>
        <div className="words-container">
          {wordsInPage.map((word) => (
            <div className="word-card" key={word._id}>
              <div className="info">
                <Link to={`${word._id}`} className="name">
                  {word.word}
                </Link>
                <span className="title">{word.sentence}</span>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          setItemsInPage={setWordsInPage}
          itemPerPage={8}
          listItems={wordsData}
        />
      </div>
    </section>
  );
};

export default List;
