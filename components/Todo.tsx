import React from "react";
import ReactMarkdown from "react-markdown";

export type TodoProps = {
  id: string;
  title: string;
  content: string;
};

const Todo: React.FC<{ todo: TodoProps }> = ({ todo }) => {
  return (
    <div>
      <h2>{todo.title}</h2>
      <ReactMarkdown children={todo.content} />
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Todo;
