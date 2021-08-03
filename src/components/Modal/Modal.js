import React from 'react';
import './Modal.css';
import {MdCancel} from "react-icons/md";

const Modal = props => (
	<div className="modal">
		<header className="modal__header">
			<h1>{props.title}</h1>
			<p>{props.description}</p>
		</header>
		<section className="modal__content">{props.children}</section>
		<section className="modal__actions">
			{props.canCancel && (
				<button className="cancelBtn" onClick={props.onCancel}>
					Cancel
				</button>)}
			{props.canConfirm && (
				<button className="confirmBtn" onClick={props.onConfirm}>
					{props.confirmText}
				</button>)}
		</section>
		<MdCancel className="closeModal" onClick = {props.closeModal}/>
	</div>
);

export default Modal;