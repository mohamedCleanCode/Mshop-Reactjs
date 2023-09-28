import { Link } from "react-router-dom";
import { PrimaryButtonProps } from "../../types/primary-button";

const PrimaryButton = ({ title, url }: PrimaryButtonProps) => {
  return (
    <button className="w-full my-[10px] p-[10px] rounded-sm bg-primary uppercase text-white font-bold text-lg">
      <Link to={url}>{title}</Link>
    </button>
  );
};

export default PrimaryButton;
