import React, { useState } from "react";

function main() {
  const [text, setText] = useState("");

  const onChangeTitle = (e) => {
    setText(e.target.value);
  };
  const onChangeContex = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
  };
  return (
    <div>
      <h2>메모장</h2>
      <h3>제목</h3>
      <input onChange={onChangeTitle} value={text} />
      <h3>내용</h3>
      <input onChange={onChangeContex} value={text} />

      <button>저장</button>
      <button onClick={onReset}>초기화</button>
    </div>
  );
}

export default main;
