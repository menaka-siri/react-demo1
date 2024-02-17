import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { BsCalendarFill } from "react-icons/bs";
import "./App.css";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const onAlertClose = () => {
    setAlertVisibility(false);
    console.log("Alert Closed");
  };

  let items = ["Wattala", "Kandana", "Colombo", "Jaffna", "Negombo"];
  // items = [];
  // items = ["Wattala", "Kandana", "Colombo"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisible && <Alert onClose={onAlertClose}>My Alert</Alert>}
      <Button
        color="danger"
        onClick={() => {
          console.log("Clicked");
          setAlertVisibility(true);
        }}
      >
        Show Alert
      </Button>
      <ListGroup
        items={items}
        heading="LK Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <BsCalendarFill color="red" size="80"></BsCalendarFill>
    </div>
  );
}

export default App;
