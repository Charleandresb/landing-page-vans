import React from "react";
import { ShoppingBag } from "lucide-react";
import { Menu } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Search } from "lucide-react";
import logo from "../images/logovans.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header__menu-icon">
        <Menu className="header__menu" />
      </div>
      <img src={logo} alt="logo" className="header__logo" />
      <div className="header__icons">
        <CircleUserRound className="header__user" />
        <Search className="header__search" />
        <ShoppingBag className="header__bag" />
      </div>
    </div>
  );
}
