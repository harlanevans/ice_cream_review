import React, { useEffect, useState } from "react";
import axios from "axios";

const Toppings = (props) => {
  const [toppings, setToppings] = useState([]);
  // toppings
  // state = { toppings: [] }
  // this.state.toppings

  useEffect(() => {
    axios.get(`/api/creams/${props.creamId}/toppings`).then((res) => {
      setToppings(res.data);
    });
  }, []);

  const renderToppings = () => {
    return toppings.map((t) => (
      <div>
        <h3>Topping name - {t.name}</h3>
      </div>
    ));
  };

  return (
    <div>
      Toppings
      {renderToppings()}
    </div>
  );
};

export default Toppings;
