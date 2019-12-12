import React, { Component } from 'react';
import axios from 'axios';
import { PostData } from '../../Authentication/PostData';
import { Route, Link, Switch } from 'react-router-dom';
import EditTable from './EditTable';
import TableRow from './TableRow';

class DrumTable extends Component {
  constructor(props) {
    super(props);
    //	this.popup = this.popup.bind(this);
    //	this.onChangedrumName = this.onChangedrumName.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    // this.state = { AllDrums: []};
    this.UpdateDrum = this.UpdateDrum.bind(this);
   this.state = {
     rand:0,
      loading: true,
      AllDrums: [],
      editMode: false,
      editData: {},
      // drumName: '',
      // drumType: '',
      // cableType: '',
      // drumDiameter: '',
      // cableLength: '',
      // cableDiameter: '',
      // location: '',
      // PostAction: {
      //   drumName: '', cableType: '', drumDiameter: '', cableLength: '',
      //   cableDiameter: '', location: ''
      // },
      // editDrumModel: false,
    };
  }



  // handleChange(event) {
  //   const name = event.target.name;
  //   const value = event.target.value;

  //   this.setState({ [name]: value });
  // }


  async componentDidMount() {
    const tokenn = localStorage.getItem('userToken');
    // const id = this.props.match.params.id;
    const url = 'http://localhost:8182/drum/drums/getAllDrum/';
    const response = await fetch(url,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': tokenn
        }
      });
    const data = await response.json();
    this.setState({
      AllDrums: data, loading: false,

    });
    console.log()
  }

  showEdit = (data) => {
    console.log("data", data);
    this.setState({ editMode: true, editData: data });
  }

  onEditFormChange = (e) => {
    console.log(e.target);
    let allData = this.state.editData;
    console.log("[e.target.name", e.target.name);
    console.log("[e.target.va", e.target.value);
    allData[e.target.name] =e.target.value;
    console.log("allData", allData);

    this.setState({ editData: allData, rand: Math.random()});
  }

  UpdateDrum(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });

    console.log("object", object);



    // const obj = {
    //   drumName: this.state.drumName,
    //   drumType: this.state.drumType,
    //   cableType: this.state.cableType,
    //   drumDiameter: this.state.drumDiameter,
    //   cableLength: this.state.cableLength,
    //   cableDiameter: this.state.cableDiameter,
    //   location: this.state.location,
    // };
    const tokenn = localStorage.getItem('userToken');
    axios.post(('http://localhost:8182/drum/drums'),object,{
    headers: {
      'Content-Type': 'application/json',
        'X-Auth-Token': tokenn
    }
  })
      .then(res => console.log(res.data));
      // /this.setState({editData: objrct})

    console.log(formData);
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.AllDrums) {
      return <div>loading...Didn't get any Drum...</div>;
    }

    return (
      <main>
        <div className="concontainer-fluid">
          <div class="col-12">
            <div class="card-body table-responsive p-0">
              <table class="table table-hover">

                <thead>
                  <tr>
                    <th>Drum ID</th>
                    <th>Cable Type</th>
                    <th>Initial cable length</th>
                    <th>Current Cable length</th>
                    <th>Drum Holder</th>
                    <th>Drum owner</th>
                    <th>Return Drum in</th>
                  </tr>
                </thead>
                {this.state.AllDrums.data.map(drums => (
                  <tbody>
                    <tr>
                      <td>{drums.id}</td>
                      <td>{drums.ctype}</td>
                      <td>{drums.clenght}</td>
                      <td>{drums.clenght}</td>
                      <td>{drums.name}</td>
                      <td>{drums.name}</td>
                      <td>
                        {/* <input data-toggle="modal" data-target="#NewEditModal" type="button" value="Register New Drum"
                          onClick={this.showEdit.bind(this, drums)} className="test btn btn-block btn-primary" /> */}
                        <div className="button button-primary" onClick={this.showEdit.bind(this, drums)}>Edit</div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
        <Switch>
          {/* <EditTable /> */}
          <Route path='/edittable/:id' component={EditTable} />
        </Switch>
        {this.state.editMode ? <EditTable data={this.state.editData} rand={this.state.rand} action={this.UpdateDrum.bind()} onChange={this.onEditFormChange.bind()} /> : ''}
      </main>
    )
  }


};

export default DrumTable;