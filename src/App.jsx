import React,{ useEffect, useState } from 'react';
import Person from './Person';
import './styles.css';

const App = () => {
	const [candidates, setCandidates] = useState([]);
	const [passedOn, setPassedOn] = useState([]);
	
	const getCandidates = async () => {
		const response = await fetch('https://randomuser.me/api/?results=10');
		const results = await response.json();
		setCandidates(results.results)
	};
	
	const rejectCandidate = (person, notes) => {
		const personWithNotes = { ...person, notes }
		setCandidates(candidates.filter(c => c !== person));
		setPassedOn([personWithNotes, ...passedOn]);
	};

	const undoReject = (person) => {
		setCandidates([person, ...candidates]);
		setPassedOn(passedOn.filter(c => c !== person));
	}
	
	useEffect(() => {
		if (candidates.length === 0) getCandidates()
	}, [candidates])

	return (
		<div className="wrapper">
			<div className="new-candidates">
				<h2>New Candidates</h2>
				{candidates.length > 0 &&
					<div>
						{candidates.map(person => 
							<Person
								person={person}
								rejectCandidate={rejectCandidate}
								undoReject={undoReject} 
							/>
						)}
					</div>
				}
			</div>
			<div>
				<h2>Passed On</h2>
				{passedOn.length > 0 && 
					<div>
						{passedOn.map(person => 
							<Person
								person={person}
								rejectCandidate={rejectCandidate}
								undoReject={undoReject}
								rejected
							/>
						)}
					</div>
				}
			</div>
		</div>
	)
}


export default App;