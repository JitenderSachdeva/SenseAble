import React, { Component } from 'react';
import './Drum.css';

class DrumMap extends Component {

	render() {
		return (
			<div className="col-md-5">
				<div className="anyClass">
				<ul class="list-group">
				<li class="list-group-item">
					<h4>Drum-10001</h4>
					<p>Location</p>
					<p>1796, Heritage City</p>
					<p>Sector 25,</p>
					<p>Gurugram, Haryana</p>
					<p>122022, India</p>
				</li>
						<li class="list-group-item">
							<h4>Drum-10002</h4>
							<p>Location</p>
							<p>1796, Heritage City</p>
							<p>Sector 25,</p>
							<p>Gurugram, Haryana</p>
							<p>122022, India</p>
						</li>


			</ul>
				</div>
			</div>
        );
	}
}

export default DrumMap;