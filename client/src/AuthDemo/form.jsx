import { useState } from "react";
import api from "../api";

const ProtectedForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    console.log(api.defaults.headers.common["Authorization"]);
    try {
      const res = await api.post("/article/createArticle", {
        title: title,
        content: content,
      });
      if (res.status === 200) {
        alert("Article Created");
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-slate-800 text-white flex justify-around items-center">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2"
        onSubmit={handlePost}
      >
        <div className="text-gray-700 text-xl font-bold">Post Article</div>
        <div className="my-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Post Article
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProtectedForm;
