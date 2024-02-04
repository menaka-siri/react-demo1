import { Fragment } from "react";

function ListGroup() {
  let items = ["Wattala", "Kandana", "Colombo", "Jaffna", "Negombo"];
  items = [];
  // items = ["Wattala", "Kandana", "Colombo"];

  return (
    <Fragment>
      <h1>LK City List</h1>
      {items.length === 0 && <p>No item found</p>} {/* trick: if first part is true, then jsx will display the second part*/}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
