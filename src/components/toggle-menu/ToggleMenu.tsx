import { CgPlayListRemove } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { ToggleMenuProps } from "../../types/toggle-menu";

const ToggleMenu = ({ handleShowMenu, status }: ToggleMenuProps) => {
  return (
    <div
      onClick={() => handleShowMenu(status)}
      className={`cursor-pointer text-xl transition-all hover:scale-[1.1] remove-bar-icon`}
    >
      {!status ? (
        <FaBars className="text-2xl" />
      ) : (
        <CgPlayListRemove className="text-2xl animate-bounce" />
      )}
    </div>
  );
};

export default ToggleMenu;
