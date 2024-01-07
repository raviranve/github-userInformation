import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../features/userSlice";
import "../App.css";
const UserCard = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  const [username, setUsername] = useState("");

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUserData(username));
  };

  return (
    <div>
      <div className="search-barUser">
        <form onSubmit={handleFormSubmit}>
          <label className="user-inform">
            Enter GitHub Username:
            <input
              className="user-input"
              type="text"
              value={username}
              onChange={handleInputChange}
            />
          </label>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}

      {status === "succeeded" && userData && (
        <div className="userCard">
          <div className="userImage">
            <img className="userImage" src={userData.avatar_url} alt="User Avatar" />
          </div>
          <div className="userDetails">
            <h2>{userData.login}</h2>
            <p>Name: {userData.name}</p>
            <p>Public Repos: {userData.public_repos}</p>
            <p>Public Gists: {userData.public_gists}</p>
            <p>
              Profile Created At:{" "}
              {new Date(userData.created_at).toLocaleDateString("en-US")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
