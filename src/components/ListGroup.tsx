import { Fragment } from "react";

function ListGroup() {
  const items = ["Wattala", "Kandana", "Colombo", "Jaffna", "Negombo"];
  return (
    <Fragment>
      <h1>LK City List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
