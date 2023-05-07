import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { notificationActions } from "../../store/notification-slice";
import { useEffect } from "react";

const Notification = () => {
  const isNotificationActive = useSelector((state) => state.notification.isActive);
  const notification = useSelector((state) => state.notification.message);

  const dispatch = useDispatch();

  useEffect(() => {
    isNotificationActive &&
      setTimeout(() => {
        dispatch(notificationActions.close());
        dispatch(notificationActions.addMessage(""));
      }, 1500);
  }, [isNotificationActive]);

  return (
    <div className={isNotificationActive ? "notification active" : "notification"}>
      <p className="text">{notification}</p>
      <button onClick={() => dispatch(notificationActions.close())}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};

export default Notification;
