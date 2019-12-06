import React,{Component} from 'react';


class DrumTable extends Component {

	render() {
	return (
		<div>
		<div className="concontainer-fluid">
		<div class="col-12">
				<div class="card-body table-responsive p-0">
					<table class="table table-hover">
						<thead>
							<tr>
								<th>Drum ID</th>
								<th>Cable Type</th>
								<th>Initial cable length</th>
								<th>StCurrent Cable length</th>
								<th>Drum Holder</th>
								<th>Drum owner</th>
								<th>Return Drum in</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Drum - 100001</td>
								<td>John Doe</td>
								<td>11-7-2014</td>
								<td><span class="tag tag-success">Approved</span></td>
								<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
							</tr>
							<tr>
								<td>219</td>
								<td>Alexander Pierce</td>
								<td>11-7-2014</td>
								<td><span class="tag tag-warning">Pending</span></td>
								<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
							</tr>
							<tr>
								<td>657</td>
								<td>Bob Doe</td>
								<td>11-7-2014</td>
								<td><span class="tag tag-primary">Approved</span></td>
								<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
							</tr>
							<tr>
								<td>175</td>
								<td>Mike Doe</td>
								<td>11-7-2014</td>
								<td><span class="tag tag-danger">Denied</span></td>
								<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
							</tr>
						</tbody>
					</table>
				</div>
		</div>
			</div>
		</div>
	)
	}
};

export default DrumTable;