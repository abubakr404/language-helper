import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Widget = ({ title, quantity, icon }) => {
  return (
    <div className="widget">
      <div className="row">
        <div className="col">
          <span className="title">{title}</span>
          <span className="counter">{quantity}</span>
        </div>
        <div className="col">
          <div className="icon">
            <FontAwesomeIcon icon={icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
