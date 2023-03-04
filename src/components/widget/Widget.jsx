import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">Completed Project</span>
        <span className="counter">31</span>
        <span className="link">See All Projects</span>
      </div>
      <div className="right">
        <div className="toggler-arrow">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  );
};

export default Widget;
