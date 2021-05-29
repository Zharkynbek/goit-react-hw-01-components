import React from "react"
import PropTypes from "prop-types";


const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map((friend) => (
      <li className="item" key={friend.id}>
        <span className="status">{friend.isOnline}</span>
        <img
          className="avatar"
          src={friend.avatar}
          alt={friend.name}
          width="48"
        />
        <p className="name">{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number
};

export default FriendList