import { FC, useState } from "react";

import { Twirl as Hamburger } from "hamburger-react";
import Drawer from "@mui/material/Drawer";
import DrawerView from "./DrawerView";

import palette from "../utils/palette";
import { BaseComponent } from "customTypes";

const MobileNav: FC<BaseComponent> = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex w-full md:hidden">
      <Hamburger
        color={palette.darkContent}
        rounded
        size={30}
        toggled={open}
        toggle={setOpen}
      />
      <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
        <DrawerView callback={() => setOpen(false)}></DrawerView>
      </Drawer>
    </div>
  );
};

export default MobileNav;
