import { useState } from "react";
import { FaUserLock } from "react-icons/fa";
import { IoIosUnlock, IoIosLock } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { formater } from "../utils/formater";

function Navbar() {
  const total = 25000;
  const [token, setToken] = useState(true);
  function changeLogin() {
    setToken((prevToken) => !prevToken);
  }
  return (
    <div className="flex bg-black text-white items-center p-3">
      <div className="flex gap-2 items-center grow">
        <h2 className="mr-2 text-2xl">¡Pizzeria Mamma Mia!</h2>
        <div className="flex gap-2 text-md">
          <button className="flex items-center gap-1 border border-white rounded-sm py-1 px-2">
            <LiaPizzaSliceSolid />
            Home
          </button>

          {token ? (
            <div className="flex gap-2">
              <button
                className="flex items-center gap-1 border border-white rounded-sm py-1 px-2"
                onClick={changeLogin}
              >
                <FaUserLock />
                Login
              </button>
              <button className="flex items-center gap-1 border border-white rounded-sm py-1 px-2">
                <FaUserLock />
                Register
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <button className="flex items-center gap-1 border border-white rounded-sm py-1 px-2">
                <IoIosUnlock />
                Profile
              </button>
              <button
                className="flex items-center gap-1 border border-white rounded-sm py-1 px-2"
                onClick={changeLogin}
              >
                <IoIosLock />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex">
        <button className="flex items-center gap-1 border border-teal-500 rounded-sm text-teal-500 py-1 px-2 text-md">
          <BsCart3 />
          Total: ${formater(total)}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
