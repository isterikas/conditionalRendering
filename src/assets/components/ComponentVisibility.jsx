import { useState } from "react";
import xina from "../images/xina.png";

const ComponentVisibility = () => {
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={() => setVisibility(!visibility)} />
        <span className="slider round"></span>
      </label>
      <div>{visibility ? <img src={xina} /> : <p>ToggledOff</p>}</div>
    </>
  );
};
export default ComponentVisibility;
