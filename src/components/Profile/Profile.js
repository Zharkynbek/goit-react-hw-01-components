import React from "react";
import PropTypes from "prop-types";
import profileImage from "./preview.png"
import "./Profile.css"


const Profile = ({ name, tag, location, avatar, stats }) => {
  const handleGetAlert = () => {
    alert('my Name is Bond, James Bond')
  }
  return (
    <div className="profile">
      <div className="description">
        <h2>Click me</h2>
        <img onClick = {() => handleGetAlert()}
          className="avatar" src={avatar} alt={name} width="280" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">followers </span>
          <span className="profile__quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">views </span>
          <span className="profile__quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">likes </span>
          <span className="profile__quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: profileImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
