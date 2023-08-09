import { useState } from "react";
import { TodoProps } from "./Todo";
import generateRandomString from "../lib/randomString";

const Create = ({ onAdd }: { onAdd: ({ id, title, content }: TodoProps) => void }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const id = generateRandomString();
      const body = { title, content };
      onAdd({ ...body, id });

      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      setTitle("");
      setContent("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={submitData}>
          <h1>New Todo</h1>
          <input autoFocus onChange={(e) => setTitle(e.target.value)} placeholder="Title" type="text" value={title} />
          <textarea cols={30} onChange={(e) => setContent(e.target.value)} placeholder="Content" rows={8} value={content} />
          <input disabled={!content || !title} type="submit" value="Create" />
        </form>
      </div>
      <style jsx>{`
        .page {
          background: var(--geist-background);
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </>
  );
};

export default Create;
