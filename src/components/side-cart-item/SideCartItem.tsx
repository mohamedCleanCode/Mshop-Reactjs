import { SideCartItemProps } from "../../types/side-cart-item";

const SideCartItem = ({ src, title, price }: SideCartItemProps) => {
  return (
    <div className="relative  flex justify-between p-[15px]">
      <div>
        <img className="w-[100px]" src={src} alt={title + "image"} />
      </div>
      <div className="flex flex-col justify-between">
        <p className="font-bold text-xl">{title}</p>
        <p className="font-bold text-primary text-lg">${price}</p>
      </div>
      <span className="absolute top-[-10px] right-0 text-xl">X</span>
    </div>
  );
};

export default SideCartItem;
