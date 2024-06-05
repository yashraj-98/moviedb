import { ArrowDropDown, Settings } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [show, handleShow] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const { user, logout } = useAuth();

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <div
      className={` w-full text-white flex justify-between px-8 py-4 fixed top-0 z-10 ${
        show && "bg-black/70"
      }`}
    >
      <ul className="flex gap-4 font-semibold">
        <Link
          to={"/"}
          className="text-xl font-extrabold tracking-wider md:text-2xl"
        >
          Home
        </Link>
      </ul>
      <div
        className="relative flex flex-col items-center text-xl cursor-pointer md:text-2xl"
        onClick={() => setDropDown(!dropDown)}
      >
        <span className="flex items-center">
          {user.name}
          <ArrowDropDown />
        </span>
        {dropDown && (
          <span
            className="p-2 text-lg font-bold text-red-600 rounded-lg bg-black/70"
            onClick={logout}
          >
            Logout
          </span>
        )}
      </div>
    </div>
  );
}
