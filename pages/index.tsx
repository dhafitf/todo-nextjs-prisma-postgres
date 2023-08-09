import React, { useState } from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Todo, { TodoProps } from "../components/Todo";
import prisma from "../lib/prisma";
import Create from "../components/Create";

export const getStaticProps: GetStaticProps = async () => {
  const todos = await prisma.todo.findMany();
  return {
    props: { todos },
    revalidate: 5,
  };
};

type Props = {
  todos: TodoProps[];
};

const Blog: React.FC<Props> = (props) => {
  const [todosList, setTodosList] = useState(props.todos || []);

  const handleAddTodo = (body: TodoProps) => {
    const newArr = [...todosList, body];
    setTodosList(newArr);
  };

  return (
    <Layout>
      <div className="page">
        <Create onAdd={(body) => handleAddTodo(body)} />
        <h1>Todo</h1>
        <main>
          {!todosList.length && <p>No todo</p>}
          {todosList.map((todo) => (
            <div key={todo.id} className="todo">
              <Todo todo={todo} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .todo {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .todo:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .todo + .todo {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Blog;
