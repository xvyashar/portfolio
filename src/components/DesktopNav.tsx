import { FC } from "react";
import { useContext } from "react";
import { Context } from "../utils/context";
import { Link } from "react-router-dom";
import { DesktopNavComponent } from "customTypes";

import { menu, Menu } from "../utils/menu";

import "../sass/styles/DesktopNav.scss";

const DesktopNav: FC<DesktopNavComponent> = ({ className, callback }) => {
  const [activePage, setActivePage] = useContext(Context);
  return (
    <div className={className}>
      <ul className="md:flex md:items-center gap-5">
        {menu.map(({ name, action }: Menu, index) => {
          const active = activePage === name;
          return (
            <li className="relative mb-2 md:mb-0" key={index}>
              <Link
                className={`${
                  active
                    ? "active text-darkContent"
                    : "disabled text-darkDisabled hover:text-darkHover"
                } text-2xl font-bold decoration-0 p-1 transition-all`}
                to={action}
                onClick={() => {
                  setActivePage(name);
                  if (callback) callback();
                }}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DesktopNav;
