import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class DB extends Component {
  render() {
    const { data } = this.state;
    return (
      <div class="cart">
        <ul>
          {data.length <= 0
            ? "YOUR CAR IS EMPTY"
            : data.map(dat => (
                <li style={{ padding: "10px" }} key={data.message}>
                  <span style={{ color: "gray" }}> item: </span> {dat.id}{" "}
                  <br />
                  <span style={{ color: "gray" }}> Name: </span>
                  {dat.message}
                </li>
              ))}
        </ul>
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            onChange={e => this.setState({ message: e.target.value })}
            placeholder="Add Your Pie"
            style={{ width: "200px" }}
          />
          <button onClick={() => this.putDataToDB(this.state.message)}>
            ADD
          </button>
        </div>
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            style={{ width: "200px" }}
            onChange={e => this.setState({ idToDelete: e.target.value })}
            placeholder="Type id to Remove"
          />
          <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
            REMOVE
          </button>
          
        </div>

        <div style={{ padding: "10px" }}>
      
        <button onClick={this.isHidden} >
          Checkout
        </button>
        {!this.state.isHidden}
        
        </div>

      </div>
      
    );
  }
}

export default DB;
