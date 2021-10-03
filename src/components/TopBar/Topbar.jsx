import React from 'react';
import "./topbar.css";

const Topbar = () => {
    return (
        <div className="top-menu">

            <div className="topLeft">
            <i class="topIcon fab fa-facebook-square"></i>
            <i class="topIcon fab fa-twitter"></i>
            <i class="topIcon fab fa-pinterest-square"></i>
            <i class="topIcon fab fa-instagram-square"></i>

            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">Log Out</li>
                </ul>
           
            </div>
            <div className="topRight">
                <img className="topImage" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <i  class="topSearchIcon fas fa-search"></i>

            </div>
            
        </div>
    );
};

export default Topbar;