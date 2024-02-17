import { Fragment, useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup(props: Props) {
  
  // items = [];
  // items = ["Wattala", "Kandana", "Colombo"];

  //State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  /*
  useState returns an array of two elements
  eg: const arr = useState(-1);
  arr[0]: variable (selectedIndex)
  arr[1]: updater function
  */

  return (
    <Fragment>
      <h1> {props.heading} </h1>
      {props.items.length === 0 && <p>No item found</p>}{" "}
      {/* trick: if first part is true, then jsx will display the second part*/}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
