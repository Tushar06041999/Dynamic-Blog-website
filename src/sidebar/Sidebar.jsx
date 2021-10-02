import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis nisi nemo, illum inventore a excepturi voluptate tempora ea ipsa maiores?</p>
            </div>

            <div className="sidebarItems">
            <span className="sidebarTitle">CATAGORIES</span>
            <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
            </ul>

            </div>

            <div className="sidebarItem">
<span className="sidebarTitle">Follow US</span>
<div className="sidebarSocial">
            <i class="sidebarIcon fab fa-facebook-square"></i>
            <i class="sidebarIcon fab fa-twitter"></i>
            <i class="sidebarIcon fab fa-pinterest-square"></i>
            <i class="sidebarIcon fab fa-instagram-square"></i>
</div>
            </div>
        </div>
    );
};

export default Sidebar;