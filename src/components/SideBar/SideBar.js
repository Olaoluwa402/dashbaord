import React from "react";
import {Link} from "react-router-dom";
import { FaChartPie } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { GiBullseye } from "react-icons/gi";
import { MdCardMembership } from "react-icons/md";


import styled from "./SideBar.module.css";

const SideBar = ({sidebarOpen,
  openSidebar}) => {
 
	return (
		<div className={styled.sideWrapper}>
			<Link to="dashboard">
				<div className={styled.sideBarItems}>
					<FaChartPie  className={styled.Icons} aria-hidden="true" />
					<h2>Dashboard</h2>
				</div>
			</Link>

			<Link to="community">
				<div className={styled.sideBarItems}>
					<FaUsers  className={styled.Icons} aria-hidden="true" />
					<h2>Community</h2>
				</div>
			</Link>

			<Link to="events">
				<div className={styled.sideBarItems}>
					<FaCalendarAlt  className={styled.Icons} aria-hidden="true" />
					<h2>Events</h2>
				</div>
			</Link>

			<Link to="messages">
				<div className={styled.sideBarItems}>
					<AiOutlineMessage  className={styled.Icons} aria-hidden="true" />
					<h2>Messages</h2>
				</div>
			</Link>

			<Link to="get_goals">
				<div className={styled.sideBarItems}>
					<GiBullseye  className={styled.Icons} aria-hidden="true" />
					<h2>Goals</h2>
				</div>
			</Link>

			<Link to="membership">
				<div className={styled.sideBarItems}>
					<MdCardMembership  className={styled.Icons} aria-hidden="true" />
					<h2>Membership</h2>
				</div>
			</Link>
		</div>
	)
}

 export default SideBar