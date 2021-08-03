import React from "react";
import {NavLink} from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import profile from "../../img/avatar.png";
import logo from "../../img/logo.png";

import styled from "./NavigationHeader.module.css";

const NavigationHeader = () => {
	return (
		<header className={styled.mainNav}>
			<div className={styled.mainNav__logo}>
				<NavLink to="/"><img src={logo} alt="logo" width="70px" height="70px"/></NavLink>
			</div>
			<div className={styled.searchContainer}>
				<FaSearch  className={styled.searchIcon} aria-hidden="true" />
				<input type="text" placeholder="Searching for people or group" />
			</div>

	
			<nav className={styled.mainNav__items}>
				<button>upgrade</button>
				<ul>
					<li><NavLink to="/comment"><FaRegComment  className={styled.commentIcon} aria-hidden="true" /></NavLink></li>
					<li><NavLink to="/notification" className={styled.notification}>
							<MdNotifications className={styled.notificationIcon} aria-hidden="true" />
							<div>2</div>
						</NavLink></li>
					<li>
						<div className="styled.caret">
							<img src={profile} alt="profile" width="20px" height="20px" />
							<FaCaretDown className={styled.caretIcon} aria-hidden="true" />
						</div>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default NavigationHeader;