import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const searchComponent = ({ allData, filterKeys }) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setFilteredData(
      allData.filter(
        (item) =>
          filterKeys.some(
            (key) =>
              item[key] &&
              JSON.stringify(item[key])
                .toLocaleLowerCase()
                .includes(query.toLocaleLowerCase())
          ) || !query
      )
    );
    // console.log(allData);
  }, [allData, query]);
  return (
    <div className="form-group search">
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
      />
      <FontAwesomeIcon icon={faSearch} />
      {query.length >= 2 && (
        <ul className="form-group dropdown-results">
          {filteredData.map((data) => (
            <li key={data._id}>
              <Link
                to={`words/${data._id}`}
                className="result"
                onClick={() => setQuery("")}
              >
                {data.word}
              </Link>
            </li>
          ))}
          {filteredData.length === 0 && (
            <li>
              <a>No matched result found</a>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default searchComponent;
