import "./navbar.scss";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import Search from "@mui/icons-material/Search";
import { Paper, InputBase, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>ZenToro</span>
        </Link>
        <HomeIcon />
        <DarkModeIcon />
        <AppsIcon />
        <Paper
          component="div"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 500,
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." />
          <IconButton type="submit" sx={{ p: "10px" }}>
            <Search />
          </IconButton>
        </Paper>
      </div>
      <div className="right">
        <PersonIcon />
        <EmailIcon />
        <NotificationsIcon />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <span>Albert Rujin</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
