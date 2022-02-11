import { useState, useEffect } from "react";
import api from "../api";

const FetchDemo = () => {
  const [description, setDescription] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleGet = () => {
    // TODO
  };

  const handlePost = (e) => {
    e.preventDefault();
    // TODO
    setDescription("");
  };

  const handleDelete = (id) => {
    // TODO
  };

  const handlePut = (id, description, compeleted) => {
    // TODO
  };

  useEffect(() => {
    handleGet();
  }, []);

  const handleInput = (e) => {
    setDescription(e.target.value);
  };

  const [taskId, setTaskId] = useState(0);
  const [editDescription, setEditDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleEdit = (taskId, description, completed) => {
    setTaskId(taskId);
    setEditDescription(description);
    setCompleted(completed);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await handlePut(taskId, editDescription, completed);
  };

  return (
    <div className="min-h-screen w-screen bg-slate-800 text-white flex flex-col justify-center items-center">
      <div className="text-5xl">Fetch Demo</div>
      <div className="w-full max-w-xs mt-5">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handlePost}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={description}
              onChange={handleInput}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </div>

      {/* Dont mind this part */}
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Completed
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Created At
                    </th>
                    <th scope="col" className="relative py-3 px-6">
                      <span className="sr-only"></span>
                    </th>
                    <th scope="col" className="relative py-3 px-6">
                      <span className="sr-only"></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {taskList?.map((task) => {
                    return (
                      <tr
                        key={task.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {task?.description}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {task?.completed ? "Completed" : "Not Yet"}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {task?.createdAt}
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap text-red-500">
                          <button onClick={() => handleDelete(task?.id)}>
                            Delete
                          </button>
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap text-blue-500">
                          <button
                            onClick={() =>
                              handleEdit(
                                task?.id,
                                task?.description,
                                task?.compeleted
                              )
                            }
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4"
        onSubmit={handleUpdate}
      >
        <div className="mb-4">
          <div className="block text-gray-700 text-sm font-bold mb-2">
            Update Task
          </div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
        </div>
        <div class="flex items-center">
          <input
            value={completed}
            onChange={() => setCompleted(!completed)}
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label for="checkbox-table-5" className="text-gray-700 ml-2">
            Completed
          </label>
        </div>
        Q
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FetchDemo;
