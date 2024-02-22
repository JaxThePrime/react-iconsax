import { useState } from "react";
import VsxIcon from "./VsxIcon";

const First = () => {
  console.log("reloaded");

  const [name, setName] = useState("Heart");
  const [size, setSize] = useState(24);
  const [type, setType] = useState("linear");
  const [color, setColor] = useState("#ffff");

  return (
    <>
      <button onClick={() => setName("Aave")}>toggle iconName</button>
      <button onClick={() => setSize((prev) => prev + 5)}>
        increase iconSize
      </button>
      <button onClick={() => setType("bulk")}>
        change type
      </button>
      <button onClick={() => setColor("#0000FF")}>
        change color
      </button>
      <VsxIcon iconName={name} size={size} type={type} color={color}/>;
    </>
  );
};

export default First;
