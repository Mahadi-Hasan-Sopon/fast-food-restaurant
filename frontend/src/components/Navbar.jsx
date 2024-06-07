import { Avatar, FormControl, MenuItem, Select } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";

const Navbar = () => {
  const [menuItem, setMenuItem] = useState("");

  const menuItems = [
    { value: "home", menu: "Home" },
    { value: "details", menu: "Details" },
    { value: "category", menu: "Category" },
    { value: "myFavorite", menu: "My Favorite" },
    { value: "profile", menu: "Profile" },
    { value: "auth", menu: "Log In/Sign Up" },
  ];

  const handleMenuItemClick = (e) => {
    // console.log(e.target.value);
    setMenuItem(e.target.value);
  };

  return (
    <div className="Nav flex justify-between gap-6 items-center w-full my-5 py-3 px-4 md:px-10 border-b-2 border-slate-200 border-opacity-50 md:border-none">
      <a
        href="/"
        className="text-3xl font-bold font-ubuntu text-black no-underline block"
      >
        pti.
      </a>

      <div className="searchAndMenu flex gap-2 items-center font-poppins">
        <div className="flex gap-2 items-center relative w-full">
          <input
            className="md:w-[450px] lg:w-[510px] w-full block h-10 md:h-11 rounded md:rounded-xl pl-11 pr-4 relative placeholder:font-poppins placeholder:text-slate-400 placeholder:opacity-55 focus:outline-none"
            type="text"
            placeholder="Search Audiobook"
          />
          <SearchOutlinedIcon className="absolute top-1/2 mt-0.5 left-4 -translate-y-1/2 text-secondaryOrange opacity-80" />
        </div>

        <FormControl
          sx={{
            minWidth: { xs: 130, md: 170 },
            position: "relative",
            bgcolor: "white",
            borderRadius: { xs: 1, md: 3 },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
          }}
        >
          <label
            htmlFor="menu"
            className={`${
              menuItem && "hidden "
            } font-semibold absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer text-lg`}
          >
            MENU
          </label>
          <Select
            value={menuItem}
            onChange={handleMenuItemClick}
            displayEmpty
            className="hove:cursor-pointer text-secondaryOrange"
            sx={{
              "& .MuiSelect-select": {
                color: menuItem ? "#FD6011" : "inherit",
                fontWeight: menuItem ? "medium" : "normal",
                outline: "none",
                border: "none",
                padding: { xs: "10px 14px", md: "12px 14px" },
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  borderRadius: 4,
                  marginTop: 1,
                  "& .MuiMenu-list": {
                    padding: 0,
                  },
                  "& .MuiMenuItem-root": {
                    borderRadius: 1,
                  },
                },
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "center",
              },
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "center",
              },
            }}
          >
            {menuItems.map((item, idx) => (
              <MenuItem
                key={idx}
                value={item.value}
                sx={{
                  color: item.value === menuItem ? "#FD6011" : "inherit",
                  fontSize: 15,
                  borderRadius: 10,
                  "&:hover": {
                    color: "#FD6011",
                  },
                }}
              >
                {item.menu}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="avatar hidden md:block">
        <Avatar
          alt="avatar"
          sx={{ width: 48, height: 48, bgcolor: "#FD6011", cursor: "pointer" }}
        >
          <PersonOutlineIcon />
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
