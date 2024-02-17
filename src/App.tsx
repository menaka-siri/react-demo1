import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const onAlertClose = () => {
    setAlertVisibility(false);
    console.log("Alert Closed");
  }

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
    </div>
  );
}

export default App;
