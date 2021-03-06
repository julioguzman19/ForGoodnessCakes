import React, { Component } from "react";
import axios from "axios";
import Bread from "./bread.jpg"
import "./style.css";

class DB extends Component {
  // initialize our state
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
    isHidden: true
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    console.log('hit did mount')
    this.getDataFromDb();
    // if (!this.state.intervalIsSet) {
    //   let interval = setInterval(this.getDataFromDb, 1000);
    //   this.setState({ intervalIsSet: interval });
    // }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base
  getDataFromDb = () => {
    fetch("/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = message => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 1;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("/api/putData", {
      id: idToBeAdded,
      message: message
    });
  };

  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = idTodelete => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach(dat => {
      if (dat.id === idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("/api/deleteData", {
      data: {
        id: objIdToDelete
      }
    });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("/api/updateData", {
      id: objIdToUpdate,
      update: { message: updateToApply }
    });
  };
  handleClick(e) {
    document.getElementById("cartOrder").innerHTML = "<span style='font-size:80px'>Thank you for your order!</span>";
  }

  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    const { data } = this.state;
    return (
      <div id="cartOrder" class="container-menu">
        <div class="col s12 m7">

          <div class="card">
            <div id="cartOrder" class="col s6 card-image">
              <img id="img1" src={Bread} />
              <div style={{ padding: "10px" }}>
                <input
                  type="text"
                  onChange={e => this.setState({ message: e.target.value })}
                  placeholder="Add Your Pie"
                  style={{ width: "200px" }}
                />
                <button class="a1887 f brown lighten-2 btn-large" onClick={() => this.putDataToDB(this.state.message)}>
                  ADD
          </button>
              </div>
              <div style={{ padding: "10px" }}>
                <input
                  type="text"
                  style={{ width: "200px" }}
                  onChange={e => this.setState({ idToDelete: e.target.value })}
                  placeholder="Type id to Remove" />
                <button class="a1887f brown lighten-2 btn-large" onClick={() => this.deleteFromDB(this.state.idToDelete)}>
                  REMOVE
               </button>
              </div>

              <div style={{ padding: "10px" }}>
                <button class="a1887f brown lighten-2 btn-large" onClick={this.handleClick.bind(this)}>Checkout</button>
                {!this.state.isHidden}
              </div>

              <div class="cart">

                <ul>
                  {data.length <= 0
                    ? "YOUR CAR IS EMPTY"
                    : data.map(dat => (
                      <li class="collection" key={data.message}>
                        <span class="collection" > ID: </span> {dat.id} <br />
                        <span class="collection" > Name: </span>
                        {dat.message}
                      </li>
                    ))}
                </ul>
              </div>
            </div >
          </div>
        </div>
      </div>
    );
  }
}

export default DB;
