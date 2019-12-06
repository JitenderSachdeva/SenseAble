import React from 'react';

const CableDrumType = (props) => {
	return (
				<div class="form-group">
			<select class="form-control">
						<option>option 1</option>
						<option>option 2</option>
						<option>option 3</option>
						<option>option 4</option>
						<option>option 5</option>
					</select>
						</div>
	)
};

export default CableDrumType;

// const PulseTabs = (props) => {
// 	return (
// 		<div onClick={() => { props.handleTabState(props.tabState) }}
// 			className={"pulse-schedule-tabs " + (props.active ? "active " : "") +
// 				(props.checked ? "checked " : "") + (props.classes ? props.classes : "")}>
// 			<span>{props.title}</span>
// 		</div>)
// }