import React, { useState } from "react";
import profile_1 from "../../img/daniel.jpg";
import profile_2 from "../../img/caleb1.jpg";
import profile_3 from "../../img/munach.jpg";
import profile_4 from "../../img/tope.jpg";
import profile_5 from "../../img/Adeola.jpg";
import profile_6 from "../../img/daniel.jpg";
import profile_7 from "../../img/munach.jpg";
import profile_8 from "../../img/tope.jpg";
import { FaEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import Backdrop from "../../components/Backdrop/Backdrop";
// import {FaCalendarAlt} from "react-icons/fa";

import styled from "./GoalScreen.module.css";

const GoalScreen = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	const modalCancelHandler = () =>{
		console.log("cancel");
	}

	const modalConfirmHandler = () =>{
		console.log("cancel");
	}

	return (
		<React.Fragment>
			{modalOpen ? (<Backdrop />) : null}
			{modalOpen ? 
				<Modal 
				closeModal={closeModal} 
				title="Add Goal"
				description="Goal Must be SMART. Specific, Measurable, Achievable, Time-Related"
				canCancel 
				canConfirm
				onCancel={modalCancelHandler} 
				onConfirm={modalConfirmHandler}
				confirmText="Save">
					<form className={styled.modalForm}>
					<div className={styled.formControl}>
						<label htmlFor="goal">Goal</label>
						<input type="text" id="title" placeholder="eg. UX Designer" />
					</div>
					<div className={styled.formControl}>
						<label htmlFor="description">Description</label>
						<textarea  id="description" cols="" rows="4" >Write something here</textarea>
					</div>
					<div className={styled.formControl}>
						<label htmlFor="action">Actions</label>
						<div className={styled.subgoal}>
							<input type="text" id="action" placeholder="Your sub goals"/>
							<button>Action</button>
						</div>
					</div>
					<div className={styled.formControl}>
						<label htmlFor="date">Start Date</label>
						<div className={styled.startDate}>
							<input type="date" id="action" placeholder="DD/MM/YYYY"/>
						</div>
					</div>

					<div className={styled.formControl}>
						<label htmlFor="date">End Date</label>
						<div className={styled.endDate}>
							<input type="date" id="action" placeholder="DD/MM/YYYY"/>
						</div>
					</div>
				
				</form>
				</Modal> : null}
			<div className={styled.wrapper}>
				<section>
					<h2>Members</h2>
					<div className={styled.members}>
						<div className={styled.member}>
							<img
								src={profile_1}
								alt="member"
								width="100%"
								height="100%"
							/>
							<div className={styled.status}></div>
						</div>
						<div className={styled.member}>
							<img
								src={profile_2}
								alt="member"
								width="100%"
								height="100%"
							/>
							<div className={styled.status}></div>
						</div>
						<div className={styled.member}>
							<img
								src={profile_3}
								alt="member"
								width="100%"
								height="100%"
							/>
							<div className={styled.status}></div>
						</div>
						<div className={styled.member}>
							<img
								src={profile_4}
								alt="member"
								width="100%"
								height="100%"
							/>
							<div className={styled.status}></div>
						</div>
						<div className={styled.member}>
							<img
								src={profile_5}
								alt="member"
								width="100%"
								height="100%"
							/>
							<div className={styled.status}></div>
						</div>
						<div className={styled.member}>
							<img
								src={profile_6}
								alt="member"
								width="100%"
								height="100%"
							/>
							<div className={styled.status}></div>
						</div>
						<div className={styled.member}>
							<img
								src={profile_7}
								alt="member"
								width="100%"
								height="100%"
							/>
							<div className={styled.status}></div>
						</div>
						<div className={styled.member}>
							<img
								src={profile_8}
								alt="member"
								width="100%"
								height="100%"
							/>
							<div className={styled.status}></div>
						</div>
					</div>
				</section>

				<section className={styled.smart}>
					<div>
						<p>
							Create SMART goals <span>S</span> = Specific{" "}
							<span>M</span> = Measurable <span>A</span> =
							Achievable <span>R</span> = Realistic <span>T</span>{" "}
							= Time-Related
						</p>
					</div>
					<button onClick={openModal}>Add a Goal</button>
				</section>

				<hr className={styled.divider} />

				<section className={styled.tableWrapper}>
					<table className="table-sm">
						<thead>
							<tr>
								<th>#</th>
								<th>Goal</th>
								<th>Description</th>
								<th>Status</th>
								<th>Target-Date</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Software Engineer career</td>
								<td>
									My aim is to become an awsomely proficient
									senior software engineer
								</td>
								<td>Ongoing</td>
								<td>April 13, 2023</td>
								<td className={styled.action}>
									<Link to="/">
										<FaEye />
									</Link>
									<Link to="/">
										<FaRegEdit />
									</Link>
								</td>
							</tr>

							<tr>
								<td>2</td>
								<td>Mobile Developer career</td>
								<td>
									My aim is to become an awsomely proficient
									senior software engineer
								</td>
								<td>Ongoing</td>
								<td>April 13, 2023</td>
								<td className={styled.action}>
									<Link to="/">
										<FaEye />
									</Link>
									<Link to="/">
										<FaRegEdit />
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</section>
			</div>
		</React.Fragment>
	);
};

export default GoalScreen;
