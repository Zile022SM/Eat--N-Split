import React from 'react';
import Friend from './Friend';

function FriendsList({ initialFriends }) {
  return (
    <ul>
      {initialFriends.map((friend) => (
          <li>
            <Friend friend={friend} /> 
          </li>
      ))}
    </ul>
  );
}

export default FriendsList;