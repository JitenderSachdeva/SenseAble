import React, { Component } from 'react';
import './drums.css';
import DrumType from "../Drums-Search/Cable-DrumType";
import DrumMapTable from '../Drums-Table/DrumTable';
import DrumMap from '../Drums-Table/DrumMap';
import Sidebar from '../../../Layout/Sidebar/Sidebar';
import Header from '../../../Layout/Header/Header';
import axios from 'axios';
import { PostData } from '../../Authentication/PostData';

class DrumsSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: true,
      off: false,
      redirect: false,
      tokenid: '',
      drumName: '',
      drumType: '',
      cableType: '',
      drumDiameter: '',
      cableLength: '',
      cableDiameter: '',
      location: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  // componentDidMount() {
  //   if (sessionStorage.getItem('userData', '')) {
  //     console.log(sessionStorage);
  //   } else {
  //     this.setState({ redirect: true });
  //   }
  // }
  async token() {
    const response = await (localStorage.getItem('userData',''))
    //  let responseJson = result;
      //console.log(responseJson);

      console.log(response(localStorage));
     }
      // .then((result) =>{
      // console.log(result);
      // });
      // if (responseJson.token) {
      //   console.log(responseJson.token);
      // } else {
      //   console.log(responseJson.token);
      // }

    // PostData(this.state).then((result) => {
    //   let responseJson = result;
    //   sessionStorage.setItem('userData',responseJson);

    // })

  //}

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }



  handleSubmit(event) {
    event.preventDefault();

    var body = {

      drumName: 'test',
      drumType: 'test',
      cableType: '1kb',
      drumDiameter: '8',
      cableLength: '8',
      cableDiameter: '4',
      location: '1',
      status: 'A',

    }

    axios({
      method: 'post',
      url: 'http://localhost:8182/drum/drums/',
      data: body,
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': (PostData)
    }
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    // const obj = {
    //   token: this.state.token,
    //   drumName: this.state.drumName,
    //   drumType: this.state.drumType,
    //   cableType: this.state.cableType,
    //   drumDiameter: this.state.drumDiameter,
    //   cableLength: this.state.cableLength,
    //   cableDiameter: this.state.cableDiameter,
    //   location: this.state.location,
    // };
    // axios.post('http://localhost:8182/drum/drums', obj)
    // .then(res => console.log(res.data));
    // this.setState({
    //   drumName: '',
    //   drumType: '',
    //   cableType: '',
    //   drumDiameter: '',
    //   cableLength: '',
    //   cableDiameter: '',
    //   location: ''
    // })
  }

  toggle = () => {
    this.setState({
      active: !this.state.active,
      off: !this.state.off
    });
  }
  render() {
    return (
      <main className="main">
        <Header />
        <Sidebar />
        <div className="content-wrapper">

          {/* <DrumMapTable /> */}
          <div class="container">
            <div className="row">
              <div className="col-md-2">
                &nbsp;  <h3>Drums</h3>
              </div>

              <div className="col-md-7"></div>
              <div style={{ marginRight: "20px", marginLeft: "15px", float: "right" }}>
                &nbsp;
                  <input data-toggle="modal" data-target="#exampleModal" type="button" value="Register New Drum"
                  onClick={this.token} className="test btn btn-block btn-primary" />
              </div>
              <div style={{ marginTop: "30px" }}>
                <i class="user-panel fa fa-cog fa-2x" style={{ color: "#B0B5C5" }}></i>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div class="form-group has-search col-md-3" >
                <i style={{ color: "#EBEAED" }} class="fa fa-search form-control-feedback"></i>
                <input type="text" class="form-control" placeholder="Search" />
              </div>
              <div className="col-md-1">
                <p>Fliter By:</p>
              </div>
              <div>
                <DrumType />
              </div>&nbsp;&nbsp;&nbsp;
						<div>
                <DrumType />
              </div>
              <div className="col">
                <span className="float-right">Show Map</span>
              </div>
              <div className="col-md-1">
                <div className="form-group">
                  <label className="switch">
                    <input onClick={this.toggle} type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
            <hr />
            {this.state.off && <DrumMap />}
            {this.state.active && <DrumMapTable />}
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <form onSubmit={this.handleSubmit}>
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Register New Drum</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div className="row">
                      <div className="col-md-5">
                        <p>Drum Name</p>
                        <input type="text" name="drumName" value={this.state.drumName}
                          onChange={this.handleChange} class="form-control" />
                      </div>
                      <div className="col-md-6">
                        <p>Drum Type</p>
                        <input type="text" name="drumType" value={this.state.drumType}
                          onChange={this.handleChange} class="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row modal-body">
                    <div className="col-md-6">
                      <p>Cable Type</p>
                      <input type="text" name="cableType" value={this.state.cableType}
                        onChange={this.handleChange} class="form-control" />
                    </div>
                    <div className="col-md-6">
                      <p>Drum Diameter</p>
                      <input type="text" name="drumDiameter" value={this.state.drumDiameter}
                        onChange={this.handleChange} class="form-control" />
                    </div>
                  </div>

                  <div className="row modal-body">
                    <div className="col-md-6">
                      <p>Cable Length</p>
                      <input type="text" name="cableLength" value={this.state.cableLength}
                        onChange={this.handleChange} class="form-control" />
                    </div>
                    <div className="col-md-6">
                      <p>Cable Diameter</p>
                      <input type="text" name="cableDiameter" value={this.state.cableDiameter}
                        onChange={this.handleChange} class="form-control" />
                    </div>
                  </div>

                  <div className="row modal-body">
                    <div className="col-md-6">
                      <p>Location</p>
                      <input type="text" name="location" value={this.state.location}
                        onChange={this.handleChange} class="form-control" />
                    </div>
                    {/* <div className="col-md-6" style={{ textAlign: "center" }}>
                    &nbsp;<p></p>
                  </div> */}
                  </div>
                  <div class="modal-footer">
                    <input type="submit" class="btn btn-primary" value="Save changes" />
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

    )
  }
}

export default DrumsSearch;