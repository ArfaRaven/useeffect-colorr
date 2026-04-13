import { useState, useEffect } from "react";

function ColorBlock() {

  const [color, setColor] = useState("red");

  const changeColor = () => {
    setColor(color === "red" ? "blue" : "red");
  };

  useEffect(() => {
    console.log("Поточний колір:", color);
  }, [color]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          margin: "20px auto"
        }}
      ></div>

      <button onClick={changeColor}>
        Змінити колір
      </button>

    </div>
  );
}

export default ColorBlock;


// 　　　 　　／＞　　フ
// 　　　 　　| 　_　 _ l
// 　 　　 　／` ミ＿xノ
// 　　 　 /　　　 　 |
// 　　　 /　 ヽ　　 ﾉ
// 　 　 │　　|　|　|
// 　／￣|　　 |　|　|
// 　| (￣ヽ＿_ヽ_)__)
// 　   二つ