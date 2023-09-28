import { BsFillCartPlusFill } from "react-icons/bs";

const CartIcon = () => {
  return (
    <div className="cursor-pointer transition-scale duration-200 hover:scale-[1.1] relative">
      <BsFillCartPlusFill className="text-xl" />
      <span className="absolute top-[-20px] right-[-15px] px-[10px] bg-primary w-fit rounded-full center-element text-white">
        5
      </span>
    </div>
  );
};

export default CartIcon;
