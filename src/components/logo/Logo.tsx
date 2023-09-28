import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="font-bold text-3xl w-fit">
      <Link to={`/`}>
        <span className="text-primary">M</span>shop
      </Link>
    </div>
  );
};

export default Logo;
