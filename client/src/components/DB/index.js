import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class DB extends Component {
  render() {
    const h1 = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "1px",
      width: "400px",
      fontFamily: "Arial",
      margin: "30px 200px 30px 30px"
    };

    const h2 = {
      color: "red",
      margin: "30px"
    };

    const { data } = this.state;
    return (
      <div class="cart">
        <ul>
          {data.length <= 0
            ? "YOUR CAR IS EMPTY"
            : data.map(dat => (
                <li style={{ padding: "10px" }} key={data.message}>
                  <span style={{ color: "gray" }}> Pie id: </span> {dat.id}{" "}
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
            placeholder="Add your pie here"
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
            placeholder="Type id of Pie to delete here"
          />
          <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
            DELETE
          </button>
        </div>
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            style={{ width: "200px" }}
            onChange={e => this.setState({ idToUpdate: e.target.value })}
            placeholder="id of item to update here"
          />
          <input
            type="text"
            style={{ width: "200px" }}
            onChange={e => this.setState({ updateToApply: e.target.value })}
            placeholder="Type new Pie here"
          />
          <button
            onClick={() =>
              this.updateDB(this.state.idToUpdate, this.state.updateToApply)
            }
          >
            UPDATE
          </button>
        </div>
      </div>
    );
  }
}

export default DB;
