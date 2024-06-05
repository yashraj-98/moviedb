import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();

  function handleLogin() {
    login({ name, email, password });
    navigate("/");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 px-16 bg-black">
      <h1 className="max-w-sm text-2xl font-bold text-center text-red-600 md:text-4xl">
        Dive into the world of entertainment
      </h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-6 text-white">
        <Input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-white border-white border-2 rounded-lg p-[2px] px-4 py-2 text-red-600 hover:text-white font-bold hover:bg-transparent transition-all ease-in-out"
        >
          Register
        </button>
      </form>
    </div>
  );
}
