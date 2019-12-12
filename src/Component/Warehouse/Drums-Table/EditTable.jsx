import React, { Component } from 'react';
import axios from 'axios';


const EditTable = ({ data, action, onChange}) => {
  console.log("datassss", data);
console.log("action", action);
  // const onSubmit=(e) =>{
  //   e.preventDefault();
  //   const obj = {
  //     data: this.state.name,
  //     data: this.state.type,
  //     data: this.state.ctype
  //   };
  //   axios.post('http://localhost:8182/drum/drums' , obj)
  //     .then(res => console.log(res.data));
  //   }
    return (
      <div>
          <div class="modal fade show open" id="NewEditModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-modal="true" style={{paddingRight: '17px', display: 'block'}}>
          <form onSubmit={action}>
            <input type="hidden" name="id" value={data.id} />
            <div class="modal-dialog" role="document">
              <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="ModalLabel">Register New Drum</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                  <div className="row">
                    <div className="col-md-6">
                      <p>Drum Name</p>
                      <input type="text" name="name" value={data.name} onChange={onChange} class="form-control" />
                    </div>
                    <div className="col-md-6">
                      <p>Drum Type</p>
                      <input type="text" name="type" value={data.type}
                         class="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row modal-body">
                  <div className="col-md-6">
                    <p>Cable Type</p>
                    <input type="text" name="ctype" value={data.ctype}
                      class="form-control" />
                  </div>
                  <div className="col-md-6">
                    <p>Drum Diameter</p>
                    <input type="text" name="diameter" value={data.diameter}
                       class="form-control" />
                  </div>
                </div>

                <div className="row modal-body">
                  <div className="col-md-6">
                    <p>Cable Length</p>
                    <input type="text" name="clenght" value={data.clenght}
                      class="form-control" />
                  </div>
                  <div className="col-md-6">
                    <p>Cable Diameter</p>
                    <input type="text" name="cdiameter" value={data.cdiameter}
                       class="form-control" />
                  </div>
                </div>

                <div className="row modal-body">
                  <div className="col-md-6">
                    <p>Location</p>
                    <input type="text" name="locationId" value={data.locationId}
                       class="form-control" />
                  </div>
                  {/* <div className="col-md-6" style={{ textAlign: "center" }}>
                    &nbsp;<p></p>
                  </div> */}
                </div>

                <div class="modal-footer">
                  <input type="submit"  class="btn btn-primary" value="Save changes" />
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
                </div>
            </div>
            </div>
            </form>
          </div>
          <div class="modal-backdrop fade show"></div>
        </div>
          )
        }

class EditPostTable extends React.Component {
  render() {
    return (
      <EditTable display={true} />
    )
  }
}

export default EditTable;