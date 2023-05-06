import {
  faEdit,
  faEnvelope,
  faLock,
  faSave,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { notificationActions } from "../../store/notification-slice";
import { environmentActions } from "../../store/environment-slice";
import axios from "axios";

const Single = () => {
  const userReFetch = useSelector((state) => state.environment.userFetchRefersh);
  const apiUri = useSelector((state) => state.environment.apiUri);
  const inputRef = useRef(null);
  const [isEditable, setIsEditable] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [passwordField, setPasswordField] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const { token, id: userId } = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  const handleChange = (prevData, ele) => ({
    ...prevData,
    [ele.name]: ele.value,
  });

  const updateProfile = async (e) => {
    e.preventDefault();
    const { name: oldName, email: oldEmail } = JSON.parse(
      localStorage.getItem("userInfo")
    );

    let updatedData = {};
    if (userData.name !== oldName)
      updatedData = {
        ...updatedData,
        name: userData.name,
      };

    if (userData.email !== oldEmail)
      updatedData = {
        ...updatedData,
        email: userData.email,
      };

    if (
      passwordField.newPassword === passwordField.confirmPassword &&
      passwordField.newPassword.length > 0
    )
      updatedData = {
        ...updatedData,
        password: passwordField.newPassword,
      };

    try {
      if (passwordField.newPassword !== passwordField.confirmPassword)
        throw new Error("password fields are not identical");
      if (JSON.stringify(updatedData) === "{}")
        throw new Error("There is no change in data");

      const { data } = await axios.patch(apiUri + "users/" + userId, updatedData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      localStorage.setItem(
        "userInfo",
        JSON.stringify({ name: data.name, email: data.email })
      );

      dispatch(notificationActions.close());
      dispatch(notificationActions.addMessage("The profile was updated successfully"));
      dispatch(notificationActions.open());
      dispatch(environmentActions.userFetch());
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

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(apiUri + "users/" + userId, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ name: data.name, email: data.email })
        );
        setUserData({ name: data.name, email: data.email });
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
    !localStorage.getItem("userInfo") && getUser();
    localStorage.getItem("userInfo") &&
      setUserData(JSON.parse(localStorage.getItem("userInfo")));
  }, [userReFetch]);

  useEffect(() => {
    isEditable && inputRef.current.focus();
  }, [isEditable]);

  return (
    <section className="content profile">
      <div className="content-container">
        <div className="content-head">
          <Link to=".." className="link">
            back
          </Link>
          <button
            className="button icon"
            onClick={() => setIsEditable((prevData) => !prevData)}
          >
            <FontAwesomeIcon icon={faEdit} />
            <span>Edit</span>
          </button>
        </div>
        <div className="profile-form">
          <form onSubmit={updateProfile}>
            <h2 className="main-title">Profile</h2>
            <div className="form-container">
              <div className="col">
                <div className={isEditable ? "form-group" : "form-group disabled"}>
                  <FontAwesomeIcon icon={faUserAlt} />
                  <input
                    type="text"
                    ref={inputRef}
                    value={userData.name}
                    name="name"
                    onChange={(e) =>
                      setUserData((prevData) => handleChange(prevData, e.target))
                    }
                    placeholder="Full Name"
                    disabled={!isEditable}
                  />
                </div>
                <div className={isEditable ? "form-group" : "form-group disabled"}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input
                    type="email"
                    value={userData.email}
                    name="email"
                    onChange={(e) =>
                      setUserData((prevData) => handleChange(prevData, e.target))
                    }
                    placeholder="Email Address"
                    disabled={!isEditable}
                  />
                </div>
              </div>
              <div className="col">
                <div className={isEditable ? "form-group" : "form-group disabled"}>
                  <FontAwesomeIcon icon={faLock} />
                  <input
                    type="password"
                    value={passwordField.newPassword}
                    name="newPassword"
                    onChange={(e) =>
                      setPasswordField((prevData) => handleChange(prevData, e.target))
                    }
                    placeholder="New Password"
                    disabled={!isEditable}
                  />
                </div>
                <div className={isEditable ? "form-group" : "form-group disabled"}>
                  <FontAwesomeIcon icon={faLock} />
                  <input
                    type="password"
                    value={passwordField.confirmPassword}
                    name="confirmPassword"
                    onChange={(e) =>
                      setPasswordField((prevData) => handleChange(prevData, e.target))
                    }
                    placeholder="Confirm Password"
                    disabled={!isEditable}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="button save">
              <FontAwesomeIcon icon={faSave} />
              <span>save</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Single;
