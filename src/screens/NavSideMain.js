import React, {useState} from "react";
// import NavBar from "../components/NavBar/NavBar";
// import SideBar from "../components/SideBar/SideBar";
	import NavigationHeader from "../components/NavigationHeader/NavigationHeader";

import "./NavSideMain.css";

const NavSideMain = ({children}) => {
 
	 const [sidebarOpen, setsidebarOpen] = useState(false);
	    const openSidebar = () => {
	        setsidebarOpen(true);
	    };
	    const closeSidebar = () => {
	        setsidebarOpen(false);
	    };

	return (
		<div className="">
		<div className="mainWrapper">
			<NavigationHeader sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} openSidebar={openSidebar}/>
			<main className="otherWrapper">{children}</main>
			<SideBar />
		</div>
		</div>
	)
}

 export default NavSideMain;