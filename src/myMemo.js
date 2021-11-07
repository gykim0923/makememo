import React, { useState } from "react";

function main() {
  const [text1, setTitle] = useState("");
  const [text2, setContex] = useState("");
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContex = (e) => {
    setContex(e.target.value);
  };

  const onReset = () => {
    setTitle("");
    setContex("");
  };
  return (
    <div>
      <h2>메모장</h2>
      <h3>제목</h3>
      <input onChange={onChangeTitle} value={text1} />
      <h3>내용</h3>
      <input onChange={onChangeContex} value={text2} />

      <button>저장</button>
      <button onClick={onReset}>초기화</button>
    </div>
  );
}

export default main;
