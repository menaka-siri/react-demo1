import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Wattala", "Kandana", "Colombo", "Jaffna", "Negombo"];
  return (
    <div>
      <ListGroup items={items} heading="LK Cities"></ListGroup>
    </div>
  );
}

export default App;
