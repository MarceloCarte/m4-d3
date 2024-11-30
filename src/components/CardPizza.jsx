/* eslint-disable react/prop-types */
import { formater } from "../utils/formater";
import { PiEyes } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { LiaPizzaSliceSolid } from "react-icons/lia";

function CardPizza({ pizza }) {
  return (
    <div className="border border-gray-300 rounded-md shadow-md">
      <div>
        <img src={pizza.img} alt="pizza" className="rounded-t-md bg-cover" />
      </div>
      <div className="border-b border-gray-300 p-2 pl-5">
        <p className="text-xl font-semibold">Pizza {pizza.name}</p>
      </div>
      <div className="border-b border-gray-300 text-center py-2 p-1">
        <h2 className="mb-3">Ingredientes:</h2>
        <div className="flex justify-center items-center text-center text-sm">
          <LiaPizzaSliceSolid />
          {pizza.ingredients.join(", ")}.
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <h2 className="text-center text-2xl font-semibold">
            Precio: ${formater(pizza.price)}
          </h2>
        </div>
        <div className="flex justify-between p-4 px-10">
          <button className="border border-black rounded flex items-center gap-1 p-1 px-2 shadow-md">
            Ver Más <PiEyes />
          </button>
          <button className="border bg-black border-white text-white rounded flex items-center gap-2 px-2 p-1 shadow-md">
            Añadir
            <BsCart3 />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
