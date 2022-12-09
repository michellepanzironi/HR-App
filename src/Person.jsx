import React,{ useEffect, useState } from 'react';
import './styles.css';

const Person = ({ person, rejectCandidate, undoReject, rejected = false }) => {
	const [newNotes, setNewNotes] = useState('');
	const { first, last } = person.name || '';
	const { city, state } = person.location || '';
	const imageUrl = person.picture.thumbnail || '';

	const handleTextAreaChange = (e) => {
		setNewNotes(e.target.value)
	};

	const handleReject = async (person) => {
		await rejectCandidate(person, newNotes);
		setNewNotes('');
	}
	console.log(person)
	return (
		<div className="person" key={first}>
			<div className="person-info">
				<div className="details">
					<img src={imageUrl} alt="" />
					<div>
						<h3>{first} {last}</h3>
						<div className="location">{city}, {state}</div>
					</div>
				</div>
				<div className="notes">
					{rejected 
						? `Notes: ${person.notes}`
						: <textarea rows="3" cols="33" onChange={(e) => handleTextAreaChange(e)} value={newNotes}/>
					}
				</div>
			</div>
			<button
				className="rejectButton"
				onClick={() => rejected ? undoReject(person) : handleReject(person, newNotes) }
			>
				{rejected ? 'Put Back' : 'Reject'}
			</button>
		</div>
	)
};

export default Person;