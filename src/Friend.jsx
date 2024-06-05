import React from "react";
import ButtonComponent from "./ButtonComponent";

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)} 💵
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
        {friend.name}  owes you {Math.abs(friend.balance)} 💵
        </p>
      )}

      {friend.balance === 0 && (
        <p>
          You owe {friend.name} are even
        </p>
      )}

      <ButtonComponent buttonName="Select" />
    </li>
  );
}

export default Friend;
