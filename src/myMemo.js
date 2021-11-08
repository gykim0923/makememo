import React, { useState } from "react";

function memoList(props) {
  const myMemo = props.myMemo;
  const listItem = myMemo.map((memo) => <li key={memo.toString()}>{memo}</li>);
  return <ul>{listItem}</ul>;
}

const myMemo = [""];

function main() {
  const [text1, setTitle] = useState("");
  const [text2, setContex] = useState("");
  state = { title: [], context: [] };
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
  const onSave = () => {
    setTitle("");
    setContex("");
  };

  return (
    <div>
      <memoList myMemo={myMemo} />
      <h2>메모장</h2>
      <h3>제목</h3>
      <input onChange={onChangeTitle} value={text1} />
      <h3>내용</h3>
      <textarea onChange={onChangeContex} value={text2} />
      <br />

      <button onClick={onSave}>저장</button>
      <button onClick={onReset}>초기화</button>
    </div>
  );
}

export default main;
