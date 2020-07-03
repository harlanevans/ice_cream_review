import React from "react";
import Flavor from "./Flavor";

class FlavorForm extends React.Component {
  state = { flavor_profile: "", served_in: "" };

  componentDidMount() {
    if (this.props.flavor) {
      const {  flavor_profile, served_in } = this.props.flavor;
      this.setState({ flavor_profile: flavor_profile, served_in: served_in });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    // const { flavor_profile, served_in } = this.state;
    e.preventDefault();

    if (this.props.flavor) {
      const { id } = this.props.flavor;
      this.props.editFlavor(id, this.state);
      this.props.toggleEdit();
    } else {
      this.props.add(this.state);
      this.props.toggleForm();
    }
  };

  render() {
    const { flavor_profile, served_in } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Flavor"
          name="flavor_profile"
          value={flavor_profile}
          onChange={this.handleChange}
        />
        <input
          placeholder="Served In?"
          name="served_in"
          value={served_in}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default FlavorForm;
