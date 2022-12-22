import React, { useEffect } from "react";
import { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";
import Logout from "../Logout/Logout";
import "./Header.css";
const Header = () => {
  const [show, setShow] = useState(false);
  // const [userName_id, setUserName_id] = useState({});

  return (
    <>
      <div className="main_header">
        <div className="header_row">
          <span className="user_id_text">USER ID :</span>
          <span className="user_id">CDPPD</span>
          <HiOutlineUser className="user_icon" />{" "}
          <span className="user_name">username</span>
          <AiFillCaretDown
            className="drop_down"
            onClick={() => {
              setShow(!show);
            }}
          />
          {show ? <Logout /> : null}
        </div>
      </div>
      <hr className="line"></hr>
    </>
  );
};
export default Header;
