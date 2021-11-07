import React, { useState } from "react";

const TodoItem = ({ todo }) => <li>{todo}</li>;

function main() {
  const [text1, setTitle] = useState("");
  const [text2, setContex] = useState("");
  state = {
    todoList: ["리액트 익히기", "맛있는 거 많이 먹기"],
    current: ""
  };
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
  const onChange = (e) => {
    const { value } = e.target;
    this.setState({
      current: value
    });
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // keyCode 13번은 엔터키
      const { todoList, current } = this.state;
      if (current.trim().length > 0) {
        this.setState({
          current: "",
          // todoList array에 push하는 식으로 상태값 직접 변경하지 말 것
          // ...로 스프레드해서 사용
          todoList: [...todoList, current.trim()]
        });
      }
    }
  };
  return (
    <div>
      <h2>메모장</h2>
      <h3>제목</h3>
      <input onChange={onChangeTitle} value={text1} />
      <h3>내용</h3>
      <textarea onChange={onChangeContex} value={text2} />
      <br />

      <button onClick={onSave}>저장</button>
      <button onClick={onReset}>초기화</button>

      <ul>
        {this.state.todoList.map((todo, index) => {
          return <TodoItem key={index} todo={todo} />;
        })}
      </ul>
      <input
        type="text"
        placeholder="할일을 입력해주세요."
        value={this.state.current}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    </div>
  );
}

export default main;
