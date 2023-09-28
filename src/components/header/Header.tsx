import { useState } from "react";
import { NavLink } from "react-router-dom";
import CartIcon from "../cart-icon/CartIcon";
import Logo from "../logo/Logo";
import ToggleMenu from "../toggle-menu/ToggleMenu";

const Header = () => {
  const [links, setLinks] = useState([
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Shopping Cart",
      url: "/shopping-cart",
    },
    {
      title: "Checkout",
      url: "/checkout",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "About Us",
      url: "/about-us",
    },
    {
      title: "Contact Us",
      url: "/contact-us",
    },
    {
      title: "Login",
      url: "/login",
    },
    {
      title: "Register",
      url: "/register",
    },
  ]);
  const [status, setstatus] = useState<boolean>(false);

  const handleShowMenu = (status: boolean) => {
    setstatus(!status);
  };
  return (
    <header className="sticky top-0">
      <div className="container flex justify-between items-center flex-wrap">
        <Logo />
        <nav className={`absolute ${status ? "open" : "close"}`}>
          <ul className="flex justify-between items-center flex-wrap gap-[10px]">
            {links.map((link) => {
              return (
                <li key={link.url} className="w-fit">
                  <NavLink
                    to={`${link.url}`}
                    className="font-bold text-secondary opacity-[.5] hover:opacity-[1] transition-all duration-200"
                  >
                    {link.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <CartIcon />
        <ToggleMenu handleShowMenu={handleShowMenu} status={status} />
        {status}
      </div>
    </header>
  );
};

export default Header;
