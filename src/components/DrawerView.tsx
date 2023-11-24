import DesktopNav from "./DesktopNav";

import { FC } from "react";
import { DesktopNavComponent } from "customTypes";

const DrawerView: FC<DesktopNavComponent> = ({ callback }) => {
  return (
    <div className="w-72 h-full bg-darkBackground p-8 pt-10">
      <DesktopNav callback={callback} />
    </div>
  );
};

export default DrawerView;
