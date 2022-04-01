import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1648765999~hmac=958fa7ecf331afbcb1c02ad91709416b"
          alt="LinkedInLogo"
        />
        <div className="header__search">
          <SearchIcon />

          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://media-exp1.licdn.com/dms/image/C5603AQGac6l9DxzgGQ/profile-displayphoto-shrink_200_200/0/1624600366869?e=1654128000&v=beta&t=Aszv58fDXMCU2IDa-tdiSVapuPGaBeMgXQEBt2CzrRg"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
