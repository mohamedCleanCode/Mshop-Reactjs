import { BiLogoGmail, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import paypal from "../../assets/images/icons/paypal.png";
import visa from "../../assets/images/icons/visa.png";
import Logo from "../logo/Logo";

const Footer = () => {
  const icons: {
    icon: React.ReactElement;
    url: string;
  }[] = [
    {
      icon: <BsFacebook />,
      url: "/",
    },
    {
      icon: <BsTwitter />,
      url: "/",
    },
    {
      icon: <BiLogoGmail />,
      url: "/",
    },
    {
      icon: <BiLogoLinkedin />,
      url: "/",
    },
    {
      icon: <BiLogoInstagram />,
      url: "/",
    },
  ];
  return (
    <footer className="bg-black text-white py-[30px]">
      <div className="container ">
        <div className="flex justify-center items-center flex-col mb-[30px]">
          <Logo />
          <p className="w-[100%] md:w-[50%] text-center my-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, voluptatibus vero error possimus deserunt quaerat
            aspernatur adipisci nobis quasi, iste animi eligendi esse aperiam
            officia corrupti sapiente illo ad similique.
          </p>
          <ul className="flex justify-center items-center gap-[15px]">
            {icons.map((icon) => {
              return (
                <li key={icon.url} className="">
                  <a
                    className="border border-white rounded-full w-[40px] h-[40px] center-element hover:text-primary hover:scale-[1.1] transition-all duration-200"
                    href={icon.url}
                  >
                    {icon.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <hr />
        <div className="flex justify-center items-center flex-col">
          <div className="flex gap-[15px]">
            <a href="/">
              <img className="w-[60px]" src={paypal} alt="" />
            </a>
            <a href="/">
              <img className="w-[60px]" src={visa} alt="" />
            </a>
          </div>
          <p>© All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
