import Login from "./login";
import Register from "./register";

const AuthDemo = () => {
  return (
    <div className="min-h-screen w-screen bg-slate-800 text-white flex justify-around items-center">
      <Register />
      <Login />
    </div>
  );
};

export default AuthDemo;
