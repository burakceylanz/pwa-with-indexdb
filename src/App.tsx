import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import loading from "/spinner.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { savePostsToDB, getPostsFromDB } from "./idb";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function Loading() {
  return (
    <div>
      <img src={loading} width={200} alt="Loading..." />
    </div>
  );
}

function App() {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    const fetchAndCachePosts = async () => {
      if (navigator.onLine) {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
          const data: Post[] = await response.json();
          setPostList(data);
          await savePostsToDB(data);
        } catch (error) {
          console.error("Fetch error:", error);
          const cachedPosts = await getPostsFromDB();
          setPostList(cachedPosts);
        }
      } else {
        const cachedPosts = await getPostsFromDB();
        setPostList(cachedPosts);
      }
    };

    fetchAndCachePosts();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Prograssive Web Application with IndexDB</h1>
      {postList.length === 0 ? (
        <Loading />
      ) : (
        <div className="list">
          <ul>
            {postList.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
