import React from "react";
import "../App.css";
import Flavor from "./Flavor";
import FlavorForm from "./FlavorForm";
import axios from "axios";

class Flavors extends React.Component {
  state = {
    flavors: [],
    showForm: false,
  };


  componentDidMount() {
    axios
      .get("/api/creams")
      .then((res) => {
        this.setState({ flavors: res.data });
      })
      .catch(console.log("Woopsie"));
  }


  renderFlavors = () =>
    this.state.flavors.map((aSingleFlavor) => <Flavor {...aSingleFlavor} deleteFlavor={this.deleteFlavor}/>);

    toggle = () => {
      this.setState({ showForm: !this.state.showForm });
    };
  
  //! CRUD ACTIONS

  addFlavor = (newFlavor) => {
    const { flavors } = this.state;
    // debugger
    axios.post("/api/creams", newFlavor).then((res) => {
      this.setState({ flavors: [res.data, ...flavors] });
    });
  };

  deleteFlavor = (id) => {
    axios.delete(`/api/creams/${id}`)
      .then(res => {
      this.setState({ flavors: this.state.flavors.filter(flav => flav.id !== id)})
    })
  }


  render() {
    // DECONSTRUCTION
    const { flavors, showForm } = this.state;
    return (
      <div>
        <h1>Hello Ice Cream World</h1>
        <div>
          {showForm ? (
            <FlavorForm add={this.addFlavor} toggleForm={this.toggle} />
          ) : (
            <div>No Form</div>
          )}
          <button onClick={() => this.toggle()}>Toggle Add Form</button>
        </div>
        {this.renderFlavors()}
      </div>
    );
  }
}

// FUNCTIONS

// JSX/HTML

export default Flavors;
