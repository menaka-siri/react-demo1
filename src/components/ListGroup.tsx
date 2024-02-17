import { Fragment, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
  
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
      <h1> {heading} </h1>
      {items.length === 0 && <p>No item found</p>}{" "}
      {/* trick: if first part is true, then jsx will display the second part*/}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
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
