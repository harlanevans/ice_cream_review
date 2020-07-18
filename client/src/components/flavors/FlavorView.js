import React from "react";
import axios from "axios";
import FlavorForm from "./FlavorForm";
import Toppings from '../toppings/Toppings';

class FlavorView extends React.Component {
  state = { flavor: {}, toggleEdit: false };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/creams/${id}`).then((res) => {
      this.setState({ flavor: res.data });
    });
  }

  editFlavor = (id, flavor) => {
    debugger
    axios.put(`/api/creams/${id}`, flavor)
      .then(res => {
      this.setState({flavor: res.data})
    })
  };

  updateTodo = (id) => {
  axios.put(`/api/items/${id}`)
    .then( res => {
      const todos = this.state.todos.map( t => {
      if (t.id === id)
        return res.data;
      return t;
    });
    this.setState({ todos, });
  })
}

  toggle = () => {
    this.setState({ toggleEdit: !this.state.toggleEdit });
  };

  render() {
    const { flavor_profile, served_in, id } = this.state.flavor;
    return (
      <div>
        <h3>{flavor_profile}</h3> served in <h3>{served_in}</h3>
        {/* {this.state.toggleEdit && <FlavorForm />} */}
        {this.state.toggleEdit ? (
          <FlavorForm
            flavor={this.state.flavor}
            editFlavor={this.editFlavor}
            toggleEdit={this.toggle}
          />
        ) : null}
        <button onClick={() => this.toggle()}>
          {this.state.toggleEdit ? "Close Form" : "Edit"}
        </button>
        <Toppings creamId={this.props.match.params.id} />
      </div>
    );
  }
}

export default FlavorView;
