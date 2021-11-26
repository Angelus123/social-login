/*global chrome*/
import React from 'react';
import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import pic from '../../assets/images/diligram_logo.png'
import './header.css';

const handleClose = () => {
  chrome.runtime.sendMessage({ action: "BG_CLOSE_EXTENSION" });
}

const Header = ({handleMinimizeExt}) => (
  <div className="header">
    <div className="header-logo">
      <img src={pic}alt="Diligram Logo" width="145" height="25" />
    </div>
    <div className="close-icon">
      <AiOutlineMinus onClick={handleMinimizeExt} size="20px" className="close-icon-min" />
      <AiOutlineClose onClick={handleClose} size="20px" className="close-icon-close" />
    </div>
  </div>
);

export default Header;
