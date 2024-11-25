import { useState } from "react";

// const [background, setBackground] = useState("")

// const DetermineColor = (props) =>{

// }

const Notification = () => {
  const [select, setSelect] = useState("");
  let result;

  if (select === "Success") {
    result = <div className="bg-green-500 p-5">Success✅️</div>;
  } else if (select === "Error") {
    result = (
      <div className="bg-red-500 p-5">
        <p>Error❌</p>
      </div>
    );
  } else if (select === "Warning") {
    result = (
      <div className="bg-yellow-500 p-5">
        <p>Warning⚠️</p>
      </div>
    );
  }

  return (
    <>
      <div>
        <select
          className="m-3"
          name="type"
          id="type"
          onChange={(e) => setSelect(e.target.value)}
        >
          <option>Success</option>
          <option>Error</option>
          <option>Warning</option>
        </select>
      </div>

      {result}
    </>
  );
};

export default Notification;
// ### **Exercise 6: Styling Based on Conditions**
// **Task:**
// Create a `Notification` component that:
// - Displays a green background if `type` is `"success"`.
// - Displays a red background if `type` is `"error"`.
// - Displays a yellow background if `type` is `"warning"`.

// **Hints:**
// - Use inline conditional styles or class names.
