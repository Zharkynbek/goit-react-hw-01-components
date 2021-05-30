import React from "react"
import PropTypes from "prop-types";
import "./FriendList.css"


const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({id, isOnline, avatar, name}) => (
      <li className="item" key={id}>
        <span className="status">{isOnline}</span>
        <img
          className="avatar"
          src={avatar}
          alt={name}
          width="48"
        />
        <p className="name">{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList