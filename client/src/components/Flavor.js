import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Flavor = ({ flavor_profile, served_in, id, deleteFlavor }) => {
  return (
    <div>
      <ul>
        <li>
          {flavor_profile} served in {served_in}
        </li>
        <Link to={`/flavors/${id}`}>Flavor Page</Link>
        <button onClick={() => deleteFlavor(id)}>Delete</button>
      </ul>
    </div>
  );
};

export default Flavor;
