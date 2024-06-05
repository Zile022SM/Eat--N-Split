import ButtonComponent from "./ButtonComponent";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import FriendsList from "./FriendsList";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowFriend(){
    setShowAddFriend(!showAddFriend);
  }
  
  return (

    <div className="app">
      <div className="sidebar">
        <FriendsList initialFriends={initialFriends} />
        <div className="flex justify-end pb-6">
         <ButtonComponent buttonName={showAddFriend ? "Close" : "Add friend"} onClick={handleShowFriend}/>
        </div>  

        {showAddFriend && <FormAddFriend />}

      </div>
      <FormSplitBill />
    </div>
  )
}

export default App
