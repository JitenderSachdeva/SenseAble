import React, { Component } from 'react';
import './Drum.css';
import Iframe from 'react-iframe'

class DrumMap extends Component {

	render() {
		return (
        <div className="container">
      <div className="row">
			<div className="col-md-4">
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
          <div className="col-md-4">
              <div className="form-group">
							<Iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCgzLEFi3wotRGzbDM21z8cX_RxAQbMfBs&q=India" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></Iframe>
				</div>
         </div>
					{/* AIzaSyCgzLEFi3wotRGzbDM21z8cX_RxAQbMfBs */}
        </div>
      </div>

        );
	}
}

export default DrumMap;