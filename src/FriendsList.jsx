import React from 'react';
import Friend from './Friend';

function FriendsList({ initialFriends }) {
  return (
       <ul>
        {initialFriends.map((friend) => (
          <Friend friend={friend} key={friend.id}/> 
        ))}
      </ul>
   
  );
}

export default FriendsList;