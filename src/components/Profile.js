import React from "react";
// import profileImage from "./preview.png"

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img className="avatar" src={avatar} alt={name} width="480" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">followers</span>
          <span className="profile__quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="quantity">views</span>
          <span className="profile__quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">likes</span>
          <span className="profile__quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
// Profile.propTypes = {
//   avatar: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   stats: PropTypes.number.isRequired,
// };

export default Profile;
