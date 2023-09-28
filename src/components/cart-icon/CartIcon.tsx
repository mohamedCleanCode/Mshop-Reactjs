import { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import SideCart from "../side-cart/SideCart";

const CartIcon = () => {
  const [status, setStatus] = useState<boolean>(false);

  return (
    <div
      onClick={() => setStatus(!status)}
      className="cursor-pointer transition-scale duration-200 hover:scale-[1.1] relative"
    >
      <BsFillCartPlusFill className="text-xl" />
      <span className="absolute top-[-20px] right-[-15px] px-[10px] bg-primary w-fit rounded-full center-element text-white">
        5
      </span>
      <SideCart status={status} />
    </div>
  );
};

export default CartIcon;
