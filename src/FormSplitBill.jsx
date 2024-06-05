import ButtonComponent from "./ButtonComponent";

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split bill with X</h2>
      <label htmlFor="bill">💰 Bill value</label>
      <input type="text" />

      <label htmlFor="people">🧑 Your expense</label>
      <input type="text" />

      <label htmlFor="tip">👥 X's expense</label>
      <input type="text" disabled />

      <label htmlFor="payment">💵 Who is paying the bill</label>
      <select name="paybill" id="">
        <option value="">--Select a person--</option>
        <option value="user">You</option>
        <option value="frined">Friend</option>
      </select>

      <ButtonComponent buttonName="Split bill" />
    </form>
  );
}

export default FormSplitBill;
