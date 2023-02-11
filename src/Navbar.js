import React from 'react';
import './Navbar.css';
import { AccountBox, Call, ExitToApp, Search } from '@material-ui/icons';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarOptions">
                <div className="navbarOption">
                    <Search/>
                    <h5>찾습니다</h5>
                </div>
                <div className="navbarOption">
                    <Call/>
                    <h5>제보합니다</h5>
                </div>
                <div className="navbarOption">
                    <AccountBox/>
                    <h5>마이 페이지</h5>
                </div>
                <div className="navbarOption">
                    <ExitToApp/>
                    <h5>로그아웃</h5>
                </div>
            </div>
        </div>
    );
}
