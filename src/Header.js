import { Avatar } from "@material-ui/core";
import { Home, NotificationsActive, Search } from "@material-ui/icons";
import React from "react";
import './Header.css';
import logo from './img/반려해듀오.png';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';

export default function Header() {
    return (
        <div className="header">
          <div className="headerLeft">
            <div className="headerTitle">
              <img src={logo} alt="반려해듀오"/>
            </div>
            <div className="headerLogo">
                <OtherHousesIcon/>
            </div>
          </div>
            
            <div className="headerOptions">
                <NotificationsActive className="headerIcon"/>
                <Avatar/>
                <div className="headerSearch">
                    <input className="headerSearchInput" type="text" placeholder="Search" />
                    <Search className="headerSearchIcon"/>
                </div>
                <h5>username 님</h5>
            </div>
        </div>
    );
}