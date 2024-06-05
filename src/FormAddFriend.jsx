import ButtonComponent from "./ButtonComponent";


function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label htmlFor="name">🙍  Friend name</label>
      <input type="text" name="friend" placeholder="add name"/>
      <label htmlFor="image">🖼  Image URL</label>
      <input type="text"  name="image" placeholder="add image URL"/>

      <ButtonComponent buttonName="Add friend" />
    </form>
  );
}

export default FormAddFriend;